#!/usr/bin/env node
require('source-map-support').install()

import * as WebSocket from 'ws'

import { heldPushStream, observe } from './streams'

export { heldPushStream, observe }

export interface BridgeClient {
  socketClient: WebSocket
  responses: Map<Text_<'RequestId'>, ResponseMessage>
}

export function makeBridgeClient (socketClient: WebSocket): BridgeClient {
  let responses = new Map()
  let pushers = new Map()
  return {
    socketClient,
    responses
  }
}
