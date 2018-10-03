import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types'
import { direct, streaming } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '@most/types'

export namespace Call {
  export function addInts (
    bridgeClient: BridgeClient.T,
    timeout: number | undefined,
    request: AddIntsRequest
  ): Promise<number> {
    return direct<AddIntsRequest, number>(
      bridgeClient,
      timeout,
      'addInts',
      request,
      'number'
    )
  }

  export function echoThrice (
    bridgeClient: BridgeClient.T,
    timeout: number | undefined,
    request: number
  ): Stream<number> {
    return streaming<number, number>(
      bridgeClient,
      timeout,
      'echoThrice',
      request,
      'number'
    )
  }

  export function concatTextAuth (
    bridgeClient: BridgeClient.T,
    timeout: number | undefined,
    token: Text<'AuthToken'>,
    request: ConcatTextAuthRequest
  ): Promise<ConcatTextAuthResponse> {
    return direct<ConcatTextAuthRequest, ConcatTextAuthResponse>(
      bridgeClient,
      timeout,
      'concatTextAuth',
      request,
      'ConcatTextAuthResponse',
      token
    )
  }

  export function echoThriceAuth (
    bridgeClient: BridgeClient.T,
    timeout: number | undefined,
    token: Text<'AuthToken'>,
    request: string
  ): Stream<string> {
    return streaming<string, string>(
      bridgeClient,
      timeout,
      'echoThriceAuth',
      request,
      'string',
      token
    )
  }
}
