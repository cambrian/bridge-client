#!/usr/bin/env node
require('source-map-support').install()

import * as Queue from 'better-queue'
import * as UUIDV4 from 'uuid/v4'
import * as WebSocket from 'ws'

import { isResOrExc, isResponseMessage, safeParse } from './parsers'

export interface BridgeClient {
  socketClient: WebSocket
  responseQueues: Map<Text_<'RequestId'>, Queue<Text_<'Response'>, void>>
}

// MAJOR TODO: Find an automated way to type check JSON.parse results.
export function makeBridgeClient (socketClient: WebSocket): BridgeClient {
  let responseQueues = new Map<Text_<'RequestId'>, Queue<Text_<'Response'>, void>>()

  socketClient.on('message', (data: WebSocket.Data) => {
    let message = data.toString()
    let responseMessage = safeParse(message)
    if (isResponseMessage(responseMessage)) {
      let queue = responseQueues.get(responseMessage.requestId)
      if (queue) queue.push(responseMessage.resText)
    }
  })

  socketClient.on('close', (code, reason) => console.log('Socket Closed:', code, reason))
  socketClient.on('error', error => console.log('Socket Error:', error))

  return {
    socketClient,
    responseQueues
  }
}

// A temporary example to be templated.
function callAddIntsSigned (
  bridgeClient: BridgeClient,
  request: AddIntsSignedRequest
): Promise<number> {
  let id = UUIDV4() as Text_<'RequestId'>
  let route = 'addSignedInts' as Text_<'Route'>
  let reqText = JSON.stringify(request) as Text_<'Request'>
  let headers = { format: 'JSON' as SerializationFormat }

  let requestMessage: RequestMessage = { id, route, reqText, headers }
  let { socketClient, responseQueues } = bridgeClient

  // TODO: Promisify send to make this fn async.
  // TODO: Finish using safe parse functions.
  return new Promise<number>((resolve, reject) => {
    responseQueues.set(id, new Queue(response => {
      let resOrExc = safeParse(response)
      if (isResOrExc(resOrExc)) {
        if ('Left' in resOrExc) {
          let exc = resOrExc.Left
          reject(exc) // TODO: Give informative errors.
        } else {
          let resItem = resOrExc.Right as IResult<number>
          resolve(resItem.contents as number)
        }
      }
    }))

    socketClient.send(JSON.stringify(requestMessage), (error) => {
      if (error) reject('failed to send request')
    })
  })
}

export { observe } from './streams'
export { Stream } from '@most/types'
