import * as WebSocket from 'isomorphic-ws'

import { ResponseMessage, Text } from './generated/types'
import { safeParse, validate } from './format'

type HandleOrError = [(resText: Text<'Response'>) => void, (errorValue: Error) => void]
type WebSocketEvent = { data: WebSocket.Data, type: string, target: WebSocket }
type WebSocketError = { error: any, message: string, type: string, target: WebSocket }
type WebSocketClose = { wasClean: boolean, code: number, reason: string, target: WebSocket }

// Future Tasks: Automate type validation even more and consider supporting other transports.
function makeResponseDispatcher<S> (bridgeClient: BridgeClient.T<S>):
  (event: WebSocketEvent) => void {
  const { responseHandlers } = bridgeClient
  return (event) => {
    const { data } = event
    const message = data.toString()
    const responseMessage = safeParse(message)
    // This is ugly and repetitive, but basically the type parameter is the type that is being
    // coerced to via type guard, and the string is the schema ref being validated against.
    if (validate<ResponseMessage>('ResponseMessage', responseMessage)) {
      const handleOrError = responseHandlers.get(responseMessage.requestId)
      if (handleOrError) {
        const [handle] = handleOrError
        handle(responseMessage.resText)
      }
    }
  }
}

function makeErrorHandler (responseHandlers: Map<Text<'RequestId'>, HandleOrError>):
  (event: WebSocketError) => void {
  return (errorEvent) => responseHandlers.forEach(([_, error]) =>
    error(new Error('[socket error] ' + errorEvent.message)))
}

function makeCloseHandler (responseHandlers: Map<Text<'RequestId'>, HandleOrError>):
  (event: WebSocketClose) => void {
  return (closeEvent) => responseHandlers.forEach(([_, error]) =>
    error(new Error('[socket closed] ' + closeEvent.reason)))
}

export namespace BridgeClient {
  // Parameter is just an annotation.
  export interface T<S> {
    typeParameterProxy?: S
    closeHandler: (event: WebSocketClose) => void
    errorHandler: (event: WebSocketError) => void
    responseDispatcher?: (event: WebSocketEvent) => void
    responseHandlers: Map<Text<'RequestId'>, HandleOrError>
    socketClient: WebSocket
  }

  export function make<S> (socketClient: WebSocket): T<S> {
    const responseHandlers = new Map<Text<'RequestId'>, HandleOrError>()
    const closeHandler = makeCloseHandler(responseHandlers)
    const errorHandler = makeErrorHandler(responseHandlers)
    const bridgeClient = { closeHandler, errorHandler, responseHandlers, socketClient }
    activate(bridgeClient)
    return bridgeClient
  }

  // Use activate only after deactivation (prefer make).
  export function activate<S> (bridgeClient: T<S>): void {
    deactivate(bridgeClient) // Just for sanity.
    bridgeClient.socketClient.onmessage = makeResponseDispatcher(bridgeClient)
    bridgeClient.socketClient.onclose = bridgeClient.closeHandler
    bridgeClient.socketClient.onerror = bridgeClient.errorHandler
  }

  export function deactivate<S> (bridgeClient: T<S>): void {
    if (bridgeClient.responseDispatcher) {
      bridgeClient.socketClient.onerror = () => undefined
      bridgeClient.socketClient.onclose = () => undefined
      bridgeClient.socketClient.onmessage = () => undefined
    }
  }
}

export function cancelResponseIfError<S> (bridgeClient: BridgeClient.T<S>, id: Text<'RequestId'>):
  (errorValue?: Error) => void {
  return (errorValue) => {
    if (errorValue) {
      const { responseHandlers } = bridgeClient
      const handleOrError = responseHandlers.get(id)
      if (handleOrError) {
        const [, error] = handleOrError
        error(errorValue)
      }
    }
  }
}
