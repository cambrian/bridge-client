import * as Queue from 'better-queue'
import * as UUIDV4 from 'uuid/v4'

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
import { Stream, heldPushStream } from './streams'
import { safeParse, validate } from './format'

import { BridgeClient } from './client'
import { SchemaRef } from './generated/schema'

// IMPORTANT: If this line errors, do the following.
// 1. Run ./types.sh from the root of the client repo.
// 2. Fix this file (if necessary) based on the new types.
// 3. Change this type string to match the new types version.
export { V555894 } from './generated/types'

const failedRequest: string = 'failed to send request'
const unexpectedClose: string = 'connection unexpectedly closed'
const unexpectedError: string = 'connection unexpectedly errored'
const unexpectedResponse: string = 'unexpected response from server'

function readableException (exc: RpcClientException): string {
  if (validate<IBadAuth>('IBadAuth', exc)) {
    return 'bad authentication'
  } else /* IBadCall */ {
    return 'bad call: ' + exc.contents[1]
  }
}

function makeInterruptHandler (reason: string): (
  bridgeClient: BridgeClient.T,
  reject: (reason: string) => void,
  id: Text<'RequestId'>
) => (() => void) {
  return (bridgeClient, reject, id) => {
    const { responseQueues } = bridgeClient
    return () => {
      responseQueues.delete(id)
      reject(reason)
    }
  }
}

const makeCloseHandler = makeInterruptHandler(unexpectedClose)
const makeErrorHandler = makeInterruptHandler(unexpectedError)

// Returns listener clean-up fn.
function makeInterruptListener (
  bridgeClient: BridgeClient.T,
  reject: (reason?: string) => void,
  id: Text<'RequestId'>
): (() => void) {
  const { responseQueues, socketClient } = bridgeClient
  const closeHandler = makeCloseHandler(bridgeClient, reject, id)
  const errorHandler = makeErrorHandler(bridgeClient, reject, id)
  socketClient.on('close', closeHandler)
  socketClient.on('error', errorHandler)

  return () => {
    socketClient.off('close', closeHandler)
    socketClient.off('error', errorHandler)
    responseQueues.delete(id)
  }
}

export function makeDirectHandler<T> (
  bridgeClient: BridgeClient.T,
  resolve: (value: T) => void,
  reject: (reason?: string) => void,
  typeTRef: SchemaRef,
  id: Text<'RequestId'>
): [((response: any, done: () => void) => void), (() => void)] {
  const clean = makeInterruptListener(bridgeClient, reject, id)
  const handle = (response: any, done: () => void) => {
    clean() // Close event listeners.
    const resOrExc = safeParse(response)
    if (validate<Either<any, any>>('Either', resOrExc)) {
      if ('Left' in resOrExc) {
        const exc = resOrExc.Left
        if (validate<RpcClientException>('RpcClientException', exc)) {
          reject(readableException(exc))
        }
      } else {
        const res = resOrExc.Right
        if (validate<T>(typeTRef, res)) {
          resolve(res)
        }
      }
    }

    // Fall-through case. No-op if reject or resolve was already called.
    reject(unexpectedResponse)

    // Mark item as done processing.
    done()
  }

  return [handle, clean]
}

export function makeStreamingHandler<T> (
  bridgeClient: BridgeClient.T,
  resolve: (value: Stream<T>) => void,
  reject: (reason?: string) => void,
  typeTRef: SchemaRef,
  id: Text<'RequestId'>
): [((response: any, done: () => void) => void), (() => void)] {
  const [push, close, stream] = heldPushStream<T>()
  const clean = makeInterruptListener(bridgeClient, reject, id)
  const handle = (response: any, done: () => void) => {
    let validated = false
    const resOrExc = safeParse(response)
    if (validate<Either<any, any>>('Either', resOrExc)) {
      if ('Left' in resOrExc) {
        const exc = resOrExc.Left
        if (validate<RpcClientException>('RpcClientException', exc)) {
          throw new Error(readableException(exc))
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
            close()
            clean()
            validated = true
          }
        }
      }
    }

    // Fall-through case.
    if (!validated) {
      throw new Error(unexpectedResponse)
    }

    // Mark item as done processing.
    done()
  }

  resolve(stream)
  return [handle, clean]
}

export function makeRequestOfAuth<T> (token?: Text<'AuthToken'>): (
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

// T is request type.
// U is response type.
export function call<T, U> (
  bridgeClient: BridgeClient.T,
  makeRequest: (
    route: Text<'Route'>,
    request: T
  ) => [Text<'RequestId'>, string],
  makeResultHandler: (
    bridgeClient: BridgeClient.T,
    resolve: (value: U) => void,
    // ^ Resolves Promise to item or Stream of items.
    reject: (reason?: string) => void,
    // ^ Only for direct handlers. Streaming handlers should always resolve to a stream and then
    // throw if an exception is encountered.
    resultRef: SchemaRef,
    id: Text<'RequestId'>
  ) => [((response: any, done: () => void) => void), (() => void)],
  // ^ Returns [handle, clean], where clean closes event listeners on termination of this call.
  route: Text<'Route'>,
  typeURef: SchemaRef,
  request: T
): Promise<U> {
  const { responseQueues, socketClient } = bridgeClient
  const [id, requestMessage] = makeRequest(route, request)
  return new Promise<U>((resolve, reject) => {
    const [handle, clean] = makeResultHandler(bridgeClient, resolve, reject, typeURef, id)
    responseQueues.set(id, new Queue(handle))
    socketClient.send(requestMessage, (error) => {
      if (error) {
        clean() // Close event listeners.
        reject(failedRequest)
      }
    })
  })
}
