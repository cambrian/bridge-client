#!/usr/bin/env node
import * as Queue from 'better-queue';
import * as WebSocket from 'ws';
import { Text } from './generated/types';
export { V215401 } from './generated/types';
export interface BridgeClient {
    socketClient: WebSocket;
    responseQueues: Map<Text<'RequestId'>, Queue<Text<'Response'>, void>>;
}
export declare function makeBridgeClient(socketClient: WebSocket): BridgeClient;
export { observe } from './streams';
export { Stream } from '@most/types';
