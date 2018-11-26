import * as T from './types';
import { BridgeClient } from '../client';
import { Stream } from '@most/types';
import { Tagged } from './types';
export declare namespace Server {
    class DummyManager {
        private tag;
    }
    class TezosOperationQueue {
        private tag;
    }
    class TezosStats {
        private tag;
    }
}
export declare namespace DummyManager {
    function addInts(bridgeClient: BridgeClient.T<Server.DummyManager>, request: T.AddIntsRequest): Promise<number>;
    function addIntsBad(bridgeClient: BridgeClient.T<Server.DummyManager>, request: T.AddIntsRequest): Promise<number>;
    function echoThrice(bridgeClient: BridgeClient.T<Server.DummyManager>, request: number): Stream<number>;
    function echoThriceBad(bridgeClient: BridgeClient.T<Server.DummyManager>, request: number): Stream<number>;
    function concatTextAuth(bridgeClient: BridgeClient.T<Server.DummyManager>, token: T.Text<'AuthToken'>, request: T.ConcatTextAuthRequest): Promise<T.ConcatTextAuthResponse>;
    function echoThriceAuth(bridgeClient: BridgeClient.T<Server.DummyManager>, token: T.Text<'AuthToken'>, request: string): Stream<string>;
    function getVoid(bridgeClient: BridgeClient.T<Server.DummyManager>): Promise<void>;
    function getVoidStream(bridgeClient: BridgeClient.T<Server.DummyManager>): Stream<void>;
}
export declare namespace TezosOperationQueue {
    function inject(bridgeClient: BridgeClient.T<Server.TezosOperationQueue>, request: Tagged<'TzSignedOperationContents', string>): Promise<void>;
}
export declare namespace TezosStats {
    function overview(bridgeClient: BridgeClient.T<Server.TezosStats>): Promise<T.OverviewResponse>;
    function bakers(bridgeClient: BridgeClient.T<Server.TezosStats>): Promise<T.BakersResponse>;
    function implicit(bridgeClient: BridgeClient.T<Server.TezosStats>, request: Tagged<'Implicit', Tagged<'TzAddress', string>>): Promise<T.ImplicitResponse>;
    function operation(bridgeClient: BridgeClient.T<Server.TezosStats>, request: Tagged<'TzOperationHash', string>): Stream<T.OperationResponse>;
}
