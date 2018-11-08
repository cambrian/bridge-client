import * as UUIDV4 from 'uuid/v4'

import { BridgeClient, cancelResponseIfError } from './client'
import {
  IHeartbeat,
  IResult,
  IRpcResponseClientException,
  IRpcResponseServerException,
  RequestMessage,
  RpcResponse,
  StreamingResponse,
  Text
} from './generated/types'
import { hold, observe, pushStream } from './streams'
import { safeParse, validate } from './format'

import { SchemaRef } from './generated/schema'
import { Stream } from '@most/types'
import { filter } from '@most/core'

const clientError = (errorText: String) => new Error('[client] ' + errorText)
const serverError = (errorText: String) => new Error('[server] ' + errorText)
const unexpectedResponseError = serverError('unexpected response')
const timeoutError = (time: number) => clientError('request timed out (' + time.toString() + ')')

function buildRequestOfAuth<T> (token?: Text<'AuthToken'>): (
  route: Text<'Route'>,
  request: T
) => [Text<'RequestId'>, string] {
  return (route, request) => {
    const id = UUIDV4()
    const reqText = JSON.stringify(request)
    const headers = { token: token as string }
    const requestMessage: RequestMessage = { id, route, reqText, headers }
    return [id, JSON.stringify(requestMessage)]
  }
}

function installDirectHandler<T, S> (
  bridgeClient: BridgeClient.T<S>,
  typeTRef: SchemaRef,
  id: Text<'RequestId'>
): Promise<T> {
  const { responseHandlers } = bridgeClient
  return new Promise((resolve, reject) => {
    const handle = (response: Text<'Response'>) => {
      // Only one result expected.
      responseHandlers.delete(id)
      const resOrExc = safeParse(response)
      if (validate<RpcResponse<any>>('RpcResponse', resOrExc)) {
        if (validate<IRpcResponseClientException>('IRpcResponseClientException', resOrExc)) {
          reject(clientError(resOrExc.contents))
        } else if (validate<IRpcResponseServerException>('IRpcResponseServerException', resOrExc)) {
          reject(serverError(resOrExc.contents))
        } else {
          const res = resOrExc.contents
          if (validate<T>(typeTRef, res)) {
            resolve(res)
          }
        }
      }
      // No-op if reject or resolve was already called.
      reject(unexpectedResponseError)
    }
    // Reject will propagate error to the Promise.
    responseHandlers.set(id, [handle, reject])
  })
}

function installStreamingHandler<T, S> (
  bridgeClient: BridgeClient.T<S>,
  typeTRef: SchemaRef,
  id: Text<'RequestId'>
): Stream<T | IHeartbeat> {
  const { responseHandlers } = bridgeClient
  const [push, error, close, stream] = pushStream<T | IHeartbeat>()
  const handle = (response: Text<'Response'>) => {
    let validated = false
    const resOrExc = safeParse(response)
    if (validate<RpcResponse<any>>('RpcResponse', resOrExc)) {
      if (validate<IRpcResponseClientException>('IRpcResponseClientException', resOrExc)) {
        responseHandlers.delete(id)
        error(clientError(resOrExc.contents))
        validated = true
      } else if (validate<IRpcResponseServerException>('IRpcResponseServerException', resOrExc)) {
        responseHandlers.delete(id)
        error(serverError(resOrExc.contents))
        validated = true
      } else {
        const res = resOrExc.contents
        if (validate<StreamingResponse<any>>('StreamingResponse', res)) {
          if (validate<IResult<any>>('IResult', res)) {
            if (validate<T>(typeTRef, res.contents)) {
              push(res.contents)
              validated = true
            }
          } else if (validate<IHeartbeat>('IHeartbeat', res)) {
            push(res)
            validated = true
          } else { /* IEndOfResults */
            responseHandlers.delete(id)
            close()
            validated = true
          }
        }
      }
    }
    // Fall-through.
    if (!validated) {
      responseHandlers.delete(id)
      error(unexpectedResponseError)
    }
  }
  // Error will push error to the stream.
  responseHandlers.set(id, [handle, error])
  return hold(stream)
}

// T is request type.
// U is response type.
function call<T, U, S> (
  installResponseHandler: (
    bridgeClient: BridgeClient.T<S>,
    typeURef: SchemaRef,
    id: Text<'RequestId'>
  ) => U,
  bridgeClient: BridgeClient.T<S>,
  route: Text<'Route'>,
  request: T,
  typeURef: SchemaRef,
  token?: Text<'AuthToken'>
): [Text<'RequestId'>, U] {
  const [id, requestMessage] = buildRequestOfAuth(token)(route, request)
  const deferredResponse = installResponseHandler(bridgeClient, typeURef, id)
  bridgeClient.socketClient.send(requestMessage, cancelResponseIfError(bridgeClient, id))
  return [id, deferredResponse]
}

// Run a custom handler if a Promise times out.
function catchPromiseTimeout<T> (
  timeout: number,
  promise: Promise<T>,
  // Timeout handler used for cleanup logic.
  timeoutHandler: (errorValue: Error) => void
): void {
  const timer = setTimeout(() => timeoutHandler(timeoutError(timeout)), timeout)
  promise.then(() => clearTimeout(timer)).catch(() => clearTimeout(timer))
}

// Run a custom handler if stream elements time out.
function catchStreamTimeout<T> (
  timeout: number,
  stream: Stream<T>,
  // Timeout handler used for cleanup logic.
  timeoutHandler: (errorValue: Error) => void
): void {
  const makeTimer = () => setTimeout(() => timeoutHandler(timeoutError(timeout)), timeout)
  let timer = makeTimer()
  observe(() => {
    clearTimeout(timer)
    timer = makeTimer()
  }, stream)
    .then(() => clearTimeout(timer))
    .catch(() => clearTimeout(timer))
}

export function direct<T, U, S> (
  bridgeClient: BridgeClient.T<S>,
  timeout: number | undefined,
  route: Text<'Route'>,
  request: T,
  typeURef: SchemaRef,
  token?: Text<'AuthToken'>
): Promise<U> {
  const [id, promise] = call
    <T, Promise<U>, S>(installDirectHandler, bridgeClient, route, request, typeURef, token)
  if (timeout) catchPromiseTimeout(timeout, promise, cancelResponseIfError(bridgeClient, id))
  return promise
}

// Since all errors are propagated via the stream, this streaming client has different semantics
// than the Haskell streaming client. In particular, the stream is returned immediately, rather than
// waiting for the first value to materialize.
export function streaming<T, U, S> (
  bridgeClient: BridgeClient.T<S>,
  timeout: number | undefined,
  route: Text<'Route'>,
  request: T,
  typeURef: SchemaRef,
  token?: Text<'AuthToken'>
): Stream<U> {
  const [id, stream] = call
    <T, Stream<U | IHeartbeat>, S>(installStreamingHandler, bridgeClient, route, request, typeURef, token)
  // Timeout listens on a stream with heartbeats, but clients of this library do not.
  if (timeout) catchStreamTimeout(timeout, stream, cancelResponseIfError(bridgeClient, id))
  return filter(x => !validate<IHeartbeat>('IHeartbeat', x), stream) as Stream<U>
}
