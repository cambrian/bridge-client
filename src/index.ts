#!/usr/bin/env node
require('source-map-support').install()

import * as Queue from 'better-queue'
import * as WebSocket from 'ws'

import { ResponseMessage, Text } from './generated/types'
import { safeParse, validate } from './helpers'

export { Call } from './callers'

// IMPORTANT: If this line errors, make sure JSON schema is re-run on updated types, THEN update
// this version type to match the actual type in generated/types.
export { V215401 } from './generated/types'

export interface BridgeClient {
  socketClient: WebSocket
  responseQueues: Map<Text<'RequestId'>, Queue<Text<'Response'>, void>>
}

// MAJOR TODO: Find an automated way to type check JSON.parse results.
export function makeBridgeClient (socketClient: WebSocket): BridgeClient {
  let responseQueues = new Map<Text<'RequestId'>, Queue<Text<'Response'>, void>>()
  socketClient.on('message', (data: WebSocket.Data) => {
    let message = data.toString()
    let responseMessage = safeParse(message)
    // This is ugly and repetitive, but basically the type parameter is the type that is being
    // coerced to via type guard, and the string is the schema ref that is being validated against.
    if (validate<ResponseMessage>('ResponseMessage', responseMessage)) {
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

export { observe } from './streams'
export { Stream } from '@most/types'
