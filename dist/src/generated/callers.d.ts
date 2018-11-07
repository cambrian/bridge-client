import * as T from './types';
import { BridgeClient } from '../client';
import { Stream } from '@most/types';
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
export declare namespace Call {
    namespace DummyManager {
        function addInts(bridgeClient: BridgeClient.T<Server.DummyManager>, request: T.AddIntsRequest): Promise<number>;
        function addIntsBad(bridgeClient: BridgeClient.T<Server.DummyManager>, request: T.AddIntsRequest): Promise<number>;
        function echoThrice(bridgeClient: BridgeClient.T<Server.DummyManager>, request: number): Stream<number>;
        function echoThriceBad(bridgeClient: BridgeClient.T<Server.DummyManager>, request: number): Stream<number>;
        function concatTextAuth(bridgeClient: BridgeClient.T<Server.DummyManager>, token: T.Text<'AuthToken'>, request: T.ConcatTextAuthRequest): Promise<T.ConcatTextAuthResponse>;
        function echoThriceAuth(bridgeClient: BridgeClient.T<Server.DummyManager>, token: T.Text<'AuthToken'>, request: string): Stream<string>;
        function getVoid(bridgeClient: BridgeClient.T<Server.DummyManager>): Promise<void>;
        function getVoidStream(bridgeClient: BridgeClient.T<Server.DummyManager>): Stream<void>;
    }
    namespace TezosOperationQueue {
        function inject(bridgeClient: BridgeClient.T<Server.TezosOperationQueue>, request: T.Tagged<'TzSignedOperationContents', string>): Promise<void>;
    }
    namespace TezosStats {
        function overview(bridgeClient: BridgeClient.T<Server.TezosStats>): Promise<T.OverviewResponse>;
        function bakers(bridgeClient: BridgeClient.T<Server.TezosStats>): Promise<T.BakersResponse>;
        function implicit(bridgeClient: BridgeClient.T<Server.TezosStats>, request: T.Tagged<'TzImplicitPkh', string>): Promise<T.ImplicitResponse>;
        function operation(bridgeClient: BridgeClient.T<Server.TezosStats>, request: T.Tagged<'TzOperationHash', string>): Stream<T.OperationResponse>;
    }
}
