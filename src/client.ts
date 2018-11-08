import * as WebSocket from 'isomorphic-ws'

import { ResponseMessage, Text } from './generated/types'
import { safeParse, validate } from './format'

const closeError = new Error('socket client was closed externally')
const unknownError = new Error('bridge client encountered an unknown error')
type HandleOrError = [(resText: Text<'Response'>) => void, (errorValue: Error) => void]

// Future Tasks: Automate type validation even more and consider supporting other transports.
function makeResponseDispatcher<S> (bridgeClient: BridgeClient.T<S>):
  (data: WebSocket.Data) => void {
  const { responseHandlers } = bridgeClient
  return (data) => {

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

function makeInterruptHandler (
  responseHandlers: Map<Text<'RequestId'>, HandleOrError>,
  errorDefault: Error
): (errorReceived?: Error) => void {
  return (errorReceived) => responseHandlers.forEach(([_, error]) =>
    errorReceived ? error(errorReceived) : error(errorDefault))
}

export namespace BridgeClient {
  // Parameter is just an annotation.
  export interface T<S> {
    typeParameterProxy?: S
    closeHandler: () => void
    errorHandler: (errorValue: Error) => void
    responseDispatcher?: (data: WebSocket.Data) => void
    responseHandlers: Map<Text<'RequestId'>, HandleOrError>
    socketClient: WebSocket
  }

  export function make<S> (socketClient: WebSocket): T<S> {
    const responseHandlers = new Map<Text<'RequestId'>, HandleOrError>()
    const closeHandler = makeInterruptHandler(responseHandlers, closeError)
    const errorHandler = makeInterruptHandler(responseHandlers, unknownError)
    const bridgeClient = { closeHandler, errorHandler, responseHandlers, socketClient }
    activate(bridgeClient)
    return bridgeClient
  }

  // Use activate only after deactivation (prefer make).
  export function activate<S> (bridgeClient: T<S>): void {
    deactivate(bridgeClient) // Just for sanity.
    console.log('activate')
    bridgeClient.responseDispatcher = makeResponseDispatcher(bridgeClient)
    bridgeClient.socketClient.onmessage = bridgeClient.responseDispatcher
    bridgeClient.socketClient.on('close', bridgeClient.closeHandler)
    bridgeClient.socketClient.on('error', bridgeClient.errorHandler)
  }

  export function deactivate<S> (bridgeClient: T<S>): void {
    if (bridgeClient.responseDispatcher) {
      bridgeClient.socketClient.off('error', bridgeClient.errorHandler)
      bridgeClient.socketClient.off('close', bridgeClient.closeHandler)
      bridgeClient.socketClient.onmessage = bridgeClient.responseDispatcher
      bridgeClient.responseDispatcher = undefined
    }
  }
}

export function cancelResponseIfError<S> (bridgeClient: BridgeClient.T<S>, id: Text<'RequestId'>):
  (errorValue?: Error) => void {
  return (errorValue) => {
    console.log('error', errorValue)

    if (errorValue) {
      console.log('error', errorValue)

      const { responseHandlers } = bridgeClient
      const handleOrError = responseHandlers.get(id)
      if (handleOrError) {
        const [, error] = handleOrError
        error(errorValue)
      }
    }
  }
}
