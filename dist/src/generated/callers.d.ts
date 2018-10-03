import { AddIntsRequest, ConcatTextAuthRequest, ConcatTextAuthResponse, Text } from './types';
import { BridgeClient } from '../client';
import { Stream } from '@most/types';
export declare namespace Call {
    function addInts(bridgeClient: BridgeClient.T, request: AddIntsRequest): Promise<number>;
    function echoThrice(bridgeClient: BridgeClient.T, request: number): Stream<number>;
    function concatTextAuth(bridgeClient: BridgeClient.T, request: ConcatTextAuthRequest, token: Text<'AuthToken'>): Promise<ConcatTextAuthResponse>;
    function echoThriceAuth(bridgeClient: BridgeClient.T, request: string, token: Text<'AuthToken'>): Stream<string>;
}
