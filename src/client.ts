import * as Queue from 'better-queue'
import * as WebSocket from 'ws'

import { ResponseMessage, Text } from './generated/types'
import { safeParse, validate } from './helpers'

function makeResponseHandler (bridgeClient: BridgeClient.T): (data: WebSocket.Data) => void {
  return (data: WebSocket.Data): void => {
    const { responseQueues } = bridgeClient
    let message = data.toString()
    let responseMessage = safeParse(message)
    // This is ugly and repetitive, but basically the type parameter is the type that is being
    // coerced to via type guard, and the string is the schema ref being validated against.
    if (validate<ResponseMessage>('ResponseMessage', responseMessage)) {
      let queue = responseQueues.get(responseMessage.requestId)
      if (queue) queue.push(responseMessage.resText)
    }
  }
}

export namespace BridgeClient {
  export interface T {
    socketClient: WebSocket
    responseQueues: Map<Text<'RequestId'>, Queue<Text<'Response'>, void>>
    responseHandler?: (data: WebSocket.Data) => void
  }

  // Future: Automate type validation even more.
  export function make (socketClient: WebSocket): T {
    const responseQueues = new Map<Text<'RequestId'>, Queue<Text<'Response'>, void>>()

    return {
      socketClient,
      responseQueues
    }
  }

  export function activate (bridgeClient: T): void {
    deactivate(bridgeClient) // Just for sanity.
    bridgeClient.responseHandler = makeResponseHandler(bridgeClient)
    bridgeClient.socketClient.on('message', bridgeClient.responseHandler)
  }

  export function deactivate (bridgeClient: T): void {
    if (bridgeClient.responseHandler) {
      bridgeClient.socketClient.off('message', bridgeClient.responseHandler)
    }
  }
}
