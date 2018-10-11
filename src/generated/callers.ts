import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types'
import { direct, streaming } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '@most/types'

export namespace Server {
  export class DummyManager { private tag: any }
}

export namespace Call {
  export namespace DummyManager {
    export function addInts (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      timeout: number | undefined,
      request: AddIntsRequest
    ): Promise<number> {
      return direct<AddIntsRequest, number, Server.DummyManager>(
        bridgeClient,
        timeout,
        'DummyManager/addInts',
        request,
        'number'
      )
    }

    export function echoThrice (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      timeout: number | undefined,
      request: number
    ): Stream<number> {
      return streaming<number, number, Server.DummyManager>(
        bridgeClient,
        timeout,
        'DummyManager/echoThrice',
        request,
        'number'
      )
    }

    export function concatTextAuth (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      timeout: number | undefined,
      token: Text<'AuthToken'>,
      request: ConcatTextAuthRequest
    ): Promise<ConcatTextAuthResponse> {
      return direct<ConcatTextAuthRequest, ConcatTextAuthResponse, Server.DummyManager>(
        bridgeClient,
        timeout,
        'DummyManager/concatTextAuth',
        request,
        'ConcatTextAuthResponse',
        token
      )
    }

    export function echoThriceAuth (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      timeout: number | undefined,
      token: Text<'AuthToken'>,
      request: string
    ): Stream<string> {
      return streaming<string, string, Server.DummyManager>(
        bridgeClient,
        timeout,
        'DummyManager/echoThriceAuth',
        request,
        'string',
        token
      )
    }
  }
}
