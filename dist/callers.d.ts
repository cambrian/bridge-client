import { AddIntsSignedRequest } from './generated/types';
import { BridgeClient } from '.';
export declare namespace Call {
    function addIntsSigned(bridgeClient: BridgeClient, request: AddIntsSignedRequest): Promise<number>;
}
