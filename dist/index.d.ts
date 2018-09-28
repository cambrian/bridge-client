#!/usr/bin/env node
import * as WebSocket from 'ws';
import { heldPushStream, observe } from './streams';
export { heldPushStream, observe };
export interface BridgeClient {
    socketClient: WebSocket;
    responses: Map<Text_<'RequestId'>, ResponseMessage>;
}
export declare function makeBridgeClient(socketClient: WebSocket): BridgeClient;
