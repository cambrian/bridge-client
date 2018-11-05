// I apologize in advance for function.ede.
import * as T from './types'

import { direct, streaming } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '@most/types'
import { map } from '@most/core'

export namespace Server {
  export class DummyManager { private tag: any }
  export class TezosOperationQueue { private tag: any }
  export class TezosStats { private tag: any }
}

export namespace Call {
  export namespace DummyManager {
    export function addInts (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      request: T.AddIntsRequest
    ): Promise<number> {
      return direct<T.AddIntsRequest, number, Server.DummyManager>(
        bridgeClient,
        20000,
        'DummyManager/addInts',
        request,
        'number'
      )
    }

    export function addIntsBad (
      bridgeClient: BridgeClient.T<Server.DummyManager>,
      request: T.AddIntsRequest
    ): Promise<number> {
      return direct<T.AddIntsRequest, number, Server.DummyManager>(
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
      token: T.Text<'AuthToken'>,
      request: T.ConcatTextAuthRequest
    ): Promise<T.ConcatTextAuthResponse> {
      return direct<T.ConcatTextAuthRequest, T.ConcatTextAuthResponse, Server.DummyManager>(
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
      token: T.Text<'AuthToken'>,
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
      return direct<T.Unit, T.Unit, Server.DummyManager>(
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
      return map(_ => undefined, streaming<T.Unit, T.Unit, Server.DummyManager>(
        bridgeClient,
        20000,
        'DummyManager/getVoidStream',
        [],
        'Unit'
      ))
    }
  }

  export namespace TezosOperationQueue {
    export function inject (
      bridgeClient: BridgeClient.T<Server.TezosOperationQueue>,
      request: T.Tagged<'TzOperation', string>
    ): Promise<void> {
      return direct<T.Tagged<'TzOperation', string>, T.Unit, Server.TezosOperationQueue>(
        bridgeClient,
        20000,
        'TezosOperationQueue/inject',
        request,
        'Unit'
      ).then(_ => undefined)
    }
  }

  export namespace TezosStats {
    export function overview (
      bridgeClient: BridgeClient.T<Server.TezosStats>
    ): Promise<T.OverviewResponse> {
      return direct<T.Unit, T.OverviewResponse, Server.TezosStats>(
        bridgeClient,
        20000,
        'TezosStats/overview',
        [],
        'OverviewResponse'
      )
    }

    export function bakers (
      bridgeClient: BridgeClient.T<Server.TezosStats>
    ): Promise<T.BakersResponse> {
      return direct<T.Unit, T.BakersResponse, Server.TezosStats>(
        bridgeClient,
        20000,
        'TezosStats/bakers',
        [],
        'BakersResponse'
      )
    }

    export function implicit (
      bridgeClient: BridgeClient.T<Server.TezosStats>,
      request: T.Tagged<'TzImplicitPkh', string>
    ): Promise<T.ImplicitResponse> {
      return direct<T.Tagged<'TzImplicitPkh', string>, T.ImplicitResponse, Server.TezosStats>(
        bridgeClient,
        20000,
        'TezosStats/implicit',
        request,
        'ImplicitResponse'
      )
    }

    export function operation (
      bridgeClient: BridgeClient.T<Server.TezosStats>,
      request: T.Tagged<'TzOperationHash', string>
    ): Stream<T.OperationResponse> {
      return streaming<T.Tagged<'TzOperationHash', string>, T.OperationResponse, Server.TezosStats>(
        bridgeClient,
        20000,
        'TezosStats/operation',
        request,
        'OperationResponse'
      )
    }
  }
}
