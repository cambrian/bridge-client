import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text, Unit } from './types'
import { direct, streaming } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '@most/types'
import { map } from '@most/core'

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
        20000,
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
        20000,
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
        20000,
        'DummyManager/echoThriceAuth',
        request,
        'string',
        token
      )
    }

    export function getVoid (
      bridgeClient: BridgeClient.T<Server.DummyManager>
    ): Promise<void> {
      return direct<Unit, Unit, Server.DummyManager>(
        bridgeClient,
        20000,
        'DummyManager/getVoid',
        [],
        'Unit'
      ).then(_ => undefined)
    }

    export function getVoidStream (
      bridgeClient: BridgeClient.T<Server.DummyManager>
    ): Stream<void> {
      return map(_ => undefined, streaming<Unit, Unit, Server.DummyManager>(
        bridgeClient,
        20000,
        'DummyManager/getVoidStream',
        [],
        'Unit'
      ))
    }
  }
}
