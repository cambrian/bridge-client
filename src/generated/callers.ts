import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types'
import { call, makeDirectHandler, makeRequestOfAuth, makeStreamingHandler } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '../streams'

// IMPORTANT: If this line errors, do the following.
// 1. Fix the error in ../call.ts before anything else.
// 2. Fix the callers.ede template based on the new types.
// 3. Change this type string to match the new types version.
// 4. Re-run the caller generation script and commit.
export { V555894 } from './types'

export namespace Call {
  export function addInts (
    bridgeClient: BridgeClient.T,
    request: AddIntsRequest
  ): Promise<number> {
    return call<AddIntsRequest, number>(
      bridgeClient,
      makeRequestOfAuth(),
      makeDirectHandler,
      'addInts',
      'number',
      request
    )
  }

  export function echoThrice (
    bridgeClient: BridgeClient.T,
    request: number
  ): Promise<Stream<number>> {
    return call<number, Stream<number>>(
      bridgeClient,
      makeRequestOfAuth(),
      makeStreamingHandler,
      'echoThrice',
      'number',
      request
    )
  }

  export function concatTextAuth (
    bridgeClient: BridgeClient.T,
    request: ConcatTextAuthRequest,
    token: Text<'AuthToken'>
  ): Promise<ConcatTextAuthResponse> {
    return call<ConcatTextAuthRequest, ConcatTextAuthResponse>(
      bridgeClient,
      makeRequestOfAuth(token),
      makeDirectHandler,
      'concatTextAuth',
      'ConcatTextAuthResponse',
      request
    )
  }

  export function echoThriceAuth (
    bridgeClient: BridgeClient.T,
    request: string,
    token: Text<'AuthToken'>
  ): Promise<Stream<string>> {
    return call<string, Stream<string>>(
      bridgeClient,
      makeRequestOfAuth(token),
      makeStreamingHandler,
      'echoThriceAuth',
      'string',
      request
    )
  }
}
