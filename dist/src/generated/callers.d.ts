import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types';
import { BridgeClient } from '../client';
import { Stream } from '@most/types';
export declare namespace Server {
    class DummyManager {
        private tag;
    }
}
export declare namespace Call {
    namespace DummyManager {
        function addInts(bridgeClient: BridgeClient.T<Server.DummyManager>, request: AddIntsRequest): Promise<number>;
        function addIntsBad(bridgeClient: BridgeClient.T<Server.DummyManager>, request: AddIntsRequest): Promise<number>;
        function echoThrice(bridgeClient: BridgeClient.T<Server.DummyManager>, request: number): Stream<number>;
        function echoThriceBad(bridgeClient: BridgeClient.T<Server.DummyManager>, request: number): Stream<number>;
        function concatTextAuth(bridgeClient: BridgeClient.T<Server.DummyManager>, token: Text<'AuthToken'>, request: ConcatTextAuthRequest): Promise<ConcatTextAuthResponse>;
        function echoThriceAuth(bridgeClient: BridgeClient.T<Server.DummyManager>, token: Text<'AuthToken'>, request: string): Stream<string>;
    }
}
