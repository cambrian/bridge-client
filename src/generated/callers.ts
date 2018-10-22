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
        20000,
        'DummyManager/Tagged "addInts"',
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
        'DummyManager/Tagged "addIntsBad"',
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
        20000,
        'DummyManager/Tagged "echoThrice"',
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
        'DummyManager/Tagged "echoThriceBad"',
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
        20000,
        'DummyManager/Tagged "concatTextAuth"',
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
        20000,
        'DummyManager/Tagged "echoThriceAuth"',
        request,
        'string',
        token
      )
    }
  }
}
