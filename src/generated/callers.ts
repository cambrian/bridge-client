import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types'
import { direct, streaming } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '@most/types'

export namespace Call {
  export function addInts (
    bridgeClient: BridgeClient.T,
    request: AddIntsRequest
  ): Promise<number> {
    return direct<AddIntsRequest, number>(
      bridgeClient,
      'addInts',
      request,
      'number'
    )
  }

  export function echoThrice (
    bridgeClient: BridgeClient.T,
    request: number
  ): Stream<number> {
    return streaming<number, number>(
      bridgeClient,
      'echoThrice',
      request,
      'number'
    )
  }

  export function concatTextAuth (
    bridgeClient: BridgeClient.T,
    request: ConcatTextAuthRequest,
    token: Text<'AuthToken'>
  ): Promise<ConcatTextAuthResponse> {
    return direct<ConcatTextAuthRequest, ConcatTextAuthResponse>(
      bridgeClient,
      'concatTextAuth',
      request,
      'ConcatTextAuthResponse',
      token
    )
  }

  export function echoThriceAuth (
    bridgeClient: BridgeClient.T,
    request: string,
    token: Text<'AuthToken'>
  ): Stream<string> {
    return streaming<string, string>(
      bridgeClient,
      'echoThriceAuth',
      request,
      'string',
      token
    )
  }
}
