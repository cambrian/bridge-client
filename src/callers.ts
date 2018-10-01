import * as Queue from 'better-queue'
import * as UUIDV4 from 'uuid/v4'

import {
  AddIntsSignedRequest,
  Either,
  IResult,
  RequestMessage,
  RpcClientException,
  SerializationFormat,
  Text
} from './generated/types'
import { safeParse, validate } from './helpers'

import { BridgeClient } from '.'

const failedRequest: string = 'failed to send request'
const unexpectedResponse: string = 'unexpected response from server'

export namespace Call {
  // A temporary example to be templated.
  export function addIntsSigned (
    bridgeClient: BridgeClient,
    request: AddIntsSignedRequest
  ): Promise<number> {
    let id = UUIDV4() as Text<'RequestId'>
    let route = 'addSignedInts' as Text<'Route'>
    let reqText = JSON.stringify(request) as Text<'Request'>
    let headers = { format: 'JSON' as SerializationFormat }

    let requestMessage: RequestMessage = { id, route, reqText, headers }
    let { socketClient, responseQueues } = bridgeClient

    // TODO: Promisify send to make this fn async.
    return new Promise<number>((resolve, reject) => {
      responseQueues.set(id, new Queue(response => {
        let resOrExc = safeParse(response)
        if (validate<Either<any, any>>('Either', resOrExc)) {
          if ('Left' in resOrExc) {
            let exc = resOrExc.Left
            if (validate<RpcClientException>('RpcClientException', exc)) {
              reject(exc) // TODO: Give informative errors.
            } else {
              reject(unexpectedResponse)
            }
          } else {
            let res = resOrExc.Right
            if (validate<IResult<any>>('IResult', res)
              && validate<number>('number', res.contents)) {
              resolve(res.contents)
            } else {
              reject(unexpectedResponse)
            }
          }
        }
      }))

      socketClient.send(JSON.stringify(requestMessage), (error) => {
        if (error) reject(failedRequest)
      })
    })
  }
}
