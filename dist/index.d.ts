#!/usr/bin/env node
import * as WebSocket from 'ws';
import { PushableStream, observe } from './streams';
import { BridgeClient } from './index';
import { Stream } from '@most/types';
export { observe, Stream };
export interface BridgeClient {
    socketClient: WebSocket;
    responseStreams: Map<Text_<'RequestId'>, PushableStream<Text_<'Response'>>>;
}
export declare function makeBridgeClient(socketClient: WebSocket): BridgeClient;
