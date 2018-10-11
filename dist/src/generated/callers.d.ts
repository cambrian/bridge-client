import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types';
import { BridgeClient } from '../client';
import { Stream } from '@most/types';
export declare namespace Call {
    namespace DummyManager {
        function addInts(bridgeClient: BridgeClient.T, timeout: number | undefined, request: AddIntsRequest): Promise<number>;
        function echoThrice(bridgeClient: BridgeClient.T, timeout: number | undefined, request: number): Stream<number>;
        function concatTextAuth(bridgeClient: BridgeClient.T, timeout: number | undefined, token: Text<'AuthToken'>, request: ConcatTextAuthRequest): Promise<ConcatTextAuthResponse>;
        function echoThriceAuth(bridgeClient: BridgeClient.T, timeout: number | undefined, token: Text<'AuthToken'>, request: string): Stream<string>;
    }
}
