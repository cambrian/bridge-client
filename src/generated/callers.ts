// I apologize in advance for function.ede.
import * as T from './types'

import { direct, streaming } from '../call'

import { BridgeClient } from '../client'
import { Stream } from '@most/types'
import { Tagged } from './types'
import { map } from '@most/core'

export namespace Server {
  export class DummyManager { private tag: any }
  export class TezosOperationQueue { private tag: any }
  export class TezosStats { private tag: any }
}

export namespace DummyManager {
  export function addInts (
    bridgeClient: BridgeClient.T<Server.DummyManager>,
    request: T.AddIntsRequest
  ): Promise<number> {
    return direct<T.AddIntsRequest, number, Server.DummyManager>(
      bridgeClient,
      20000,
      'dummy-manager/addInts',
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
      'dummy-manager/addIntsBad',
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
      'dummy-manager/echoThrice',
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
      'dummy-manager/echoThriceBad',
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
      'dummy-manager/concatTextAuth',
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
      'dummy-manager/echoThriceAuth',
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
      'dummy-manager/getVoid',
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
      'dummy-manager/getVoidStream',
      [],
      'Unit'
    ))
  }
}

export namespace TezosOperationQueue {
  export function inject (
    bridgeClient: BridgeClient.T<Server.TezosOperationQueue>,
    request: Tagged<'TzSignedOperation', string>
  ): Promise<void> {
    return direct<Tagged<'TzSignedOperation', string>, T.Unit, Server.TezosOperationQueue>(
      bridgeClient,
      20000,
      'tezos-operation-queue/inject',
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
      'tezos-stats/overview',
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
      'tezos-stats/bakers',
      [],
      'BakersResponse'
    )
  }

  export function implicit (
    bridgeClient: BridgeClient.T<Server.TezosStats>,
    request: Tagged<'Implicit', Tagged<'TzAddress', string>>
  ): Promise<T.ImplicitResponse> {
    return direct<Tagged<'Implicit', Tagged<'TzAddress', string>>, T.ImplicitResponse, Server.TezosStats>(
      bridgeClient,
      20000,
      'tezos-stats/implicit',
      request,
      'ImplicitResponse'
    )
  }

  export function operation (
    bridgeClient: BridgeClient.T<Server.TezosStats>,
    request: Tagged<'TzOperationHash', string>
  ): Stream<T.OperationResponse> {
    return streaming<Tagged<'TzOperationHash', string>, T.OperationResponse, Server.TezosStats>(
      bridgeClient,
      20000,
      'tezos-stats/operation',
      request,
      'OperationResponse'
    )
  }
}
