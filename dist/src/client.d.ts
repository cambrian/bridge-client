import * as Queue from 'better-queue';
import * as WebSocket from 'ws';
import { Text } from './generated/types';
export declare namespace BridgeClient {
    interface T {
        socketClient: WebSocket;
        responseQueues: Map<Text<'RequestId'>, Queue<Text<'Response'>, void>>;
        responseHandler?: (data: WebSocket.Data) => void;
    }
    function make(socketClient: WebSocket): T;
    function activate(bridgeClient: T): void;
    function deactivate(bridgeClient: T): void;
}
