import * as Queue from 'better-queue'
import * as UUIDV4 from 'uuid/v4'

import {
  AddIntsRequest,
  Either,
  IBadAuth,
  IResult,
  RequestMessage,
  RpcClientException,
  SerializationFormat,
  Text
} from './generated/types'
import { safeParse, validate } from './helpers'

import { BridgeClient } from '.'

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

function makeSocketHandler (
  bridgeClient: BridgeClient.T,
  reject: (reason: string) => void,
  id: Text<'RequestId'>,
  reason: string
): () => void {
  const { responseQueues } = bridgeClient
  return (): void => {
    responseQueues.delete(id)
    reject(reason)
  }
}

export namespace Call {
  export function addInts (
    bridgeClient: BridgeClient.T,
    request: AddIntsRequest
  ): Promise<number> {
    const id = UUIDV4() as Text<'RequestId'>
    const route = 'addInts' as Text<'Route'>
    const reqText = JSON.stringify(request) as Text<'Request'>
    const headers = { format: 'JSON' as SerializationFormat }

    const requestMessage: RequestMessage = { id, route, reqText, headers }
    const { socketClient, responseQueues } = bridgeClient

    return new Promise<number>((resolve, reject) => {
      const closeHandler = makeSocketHandler(bridgeClient, reject, id, unexpectedClose)
      const errorHandler = makeSocketHandler(bridgeClient, reject, id, unexpectedError)

      socketClient.on('close', closeHandler)
      socketClient.on('error', errorHandler)

      responseQueues.set(id, new Queue(response => {
        socketClient.off('close', closeHandler)
        socketClient.off('error', errorHandler)
        responseQueues.delete(id)
        let resOrExc = safeParse(response)
        if (validate<Either<any, any>>('Either', resOrExc)) {
          if ('Left' in resOrExc) {
            let exc = resOrExc.Left
            if (validate<RpcClientException>('RpcClientException', exc)) {
              reject(readableException(exc))
            }
          } else {
            let res = resOrExc.Right
            if (validate<IResult<any>>('IResult', res)
              && validate<number>('number', res.contents)) {
              resolve(res.contents)
            }
          }
        }

        // Fall-through case. No-op if reject or resolve was already called.
        reject(unexpectedResponse)
      }))

      socketClient.send(JSON.stringify(requestMessage), (error) => {
        if (error) {
          responseQueues.delete(id)
          reject(failedRequest)
        }
      })
    })
  }
}
