import * as UUIDV4 from 'uuid/v4'

import { BridgeClient, cancelResponseIfError } from './client'
import {
  Either,
  IBadAuth,
  IResult,
  RequestMessage,
  ResultItem,
  RpcClientException,
  SerializationFormat,
  Text
} from './generated/types'
import { safeParse, validate } from './format'

import { SchemaRef } from './generated/schema'
import { Stream } from '@most/types'
import { heldPushStream } from './streams'

const unexpectedResponseError = new Error('unexpected response from server')

function translateException (exc: RpcClientException): Error {
  if (validate<IBadAuth>('IBadAuth', exc)) {
    return new Error('bad authentication')
  } else /* IBadCall */ {
    return new Error('bad call: ' + exc.contents[1])
  }
}

function buildRequestOfAuth<T> (token?: Text<'AuthToken'>): (
  route: Text<'Route'>,
  request: T
) => [Text<'RequestId'>, string] {
  return (route, request) => {
    const id = UUIDV4()
    const reqText = JSON.stringify(request)
    const headers = { format: 'JSON' as SerializationFormat, token }
    const requestMessage: RequestMessage = { id, route, reqText, headers }
    return [id, JSON.stringify(requestMessage)]
  }
}

function installDirectHandler<T> (
  bridgeClient: BridgeClient.T,
  typeTRef: SchemaRef,
  id: Text<'RequestId'>
): Promise<T> {
  const { responseHandlers } = bridgeClient
  return new Promise((resolve, reject) => {
    const handle = (response: Text<'Response'>) => {
      // Only one result expected.
      responseHandlers.delete(id)
      const resOrExc = safeParse(response)
      if (validate<Either<any, any>>('Either', resOrExc)) {
        if ('Left' in resOrExc) {
          const exc = resOrExc.Left
          if (validate<RpcClientException>('RpcClientException', exc)) {
            reject(translateException(exc))
          }
        } else {
          const res = resOrExc.Right
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

function installStreamingHandler<T> (
  bridgeClient: BridgeClient.T,
  typeTRef: SchemaRef,
  id: Text<'RequestId'>
): Stream<T> {
  const { responseHandlers } = bridgeClient
  const [push, error, close, stream] = heldPushStream<T>()
  const handle = (response: Text<'Response'>) => {
    let validated = false
    const resOrExc = safeParse(response)
    if (validate<Either<any, any>>('Either', resOrExc)) {
      if ('Left' in resOrExc) {
        const exc = resOrExc.Left
        if (validate<RpcClientException>('RpcClientException', exc)) {
          responseHandlers.delete(id)
          error(translateException(exc))
          validated = true
        }
      } else {
        const res = resOrExc.Right
        if (validate<ResultItem<any>>('ResultItem', res)) {
          if (validate<IResult<any>>('IResult', res)) {
            if (validate<T>(typeTRef, res.contents)) {
              push(res.contents)
              validated = true
            }
          } else {
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
  return stream
}

// T is request type.
// U is response type.
function call<T, U> (
  installResponseHandler: (
    bridgeClient: BridgeClient.T,
    typeURef: SchemaRef,
    id: Text<'RequestId'>
  ) => U,
  bridgeClient: BridgeClient.T,
  route: Text<'Route'>,
  request: T,
  typeURef: SchemaRef,
  token?: Text<'AuthToken'>
): U {
  const [id, requestMessage] = buildRequestOfAuth(token)(route, request)
  const deferredResponse = installResponseHandler(bridgeClient, typeURef, id)
  bridgeClient.socketClient.send(requestMessage, cancelResponseIfError(bridgeClient, id))
  return deferredResponse
}

export function direct<T, U> (
  bridgeClient: BridgeClient.T,
  route: Text<'Route'>,
  request: T,
  typeURef: SchemaRef,
  token?: Text<'AuthToken'>
): Promise<U> {
  return call<T, Promise<U>>(installDirectHandler, bridgeClient, route, request, typeURef, token)
}

export function streaming<T, U> (
  bridgeClient: BridgeClient.T,
  route: Text<'Route'>,
  request: T,
  typeURef: SchemaRef,
  token?: Text<'AuthToken'>
): Stream<U> {
  return call<T, Stream<U>>(installStreamingHandler, bridgeClient, route, request, typeURef, token)
}
