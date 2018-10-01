import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types';
import { BridgeClient } from '../client';
import { Stream } from '../streams';
export declare namespace Call {
    function addInts(bridgeClient: BridgeClient.T, request: AddIntsRequest): Promise<number>;
    function echoThrice(bridgeClient: BridgeClient.T, request: number): Promise<Stream<number>>;
    function concatTextAuth(bridgeClient: BridgeClient.T, request: ConcatTextAuthRequest, token: Text<'AuthToken'>): Promise<ConcatTextAuthResponse>;
    function echoThriceAuth(bridgeClient: BridgeClient.T, request: string, token: Text<'AuthToken'>): Promise<Stream<string>>;
}
