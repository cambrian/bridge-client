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
      request: AddIntsRequest
    ): Promise<number> {
      return direct<AddIntsRequest, number, Server.DummyManager>(
        bridgeClient,
        10000,
        'DummyManager/addInts',
        request,
        'number'
      )
    }

    export function addIntsBad (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      request: AddIntsRequest
    ): Promise<number> {
      return direct<AddIntsRequest, number, Server.DummyManager>(
        bridgeClient,
        1,
        'DummyManager/addIntsBad',
        request,
        'number'
      )
    }

    export function echoThrice (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      request: number
    ): Stream<number> {
      return streaming<number, number, Server.DummyManager>(
        bridgeClient,
        10000,
        'DummyManager/echoThrice',
        request,
        'number'
      )
    }

    export function echoThriceBad (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      request: number
    ): Stream<number> {
      return streaming<number, number, Server.DummyManager>(
        bridgeClient,
        1,
        'DummyManager/echoThriceBad',
        request,
        'number'
      )
    }

    export function concatTextAuth (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      token: Text<'AuthToken'>,
      request: ConcatTextAuthRequest
    ): Promise<ConcatTextAuthResponse> {
      return direct<ConcatTextAuthRequest, ConcatTextAuthResponse, Server.DummyManager>(
        bridgeClient,
        10000,
        'DummyManager/concatTextAuth',
        request,
        'ConcatTextAuthResponse',
        token
      )
    }

    export function echoThriceAuth (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      token: Text<'AuthToken'>,
      request: string
    ): Stream<string> {
      return streaming<string, string, Server.DummyManager>(
        bridgeClient,
        10000,
        'DummyManager/echoThriceAuth',
        request,
        'string',
        token
      )
    }
  }
}
