/// <reference types="ws" />
import * as WebSocket from 'isomorphic-ws';
import { Text } from './generated/types';
type HandleOrError = [(resText: Text<'Response'>) => void, (errorValue: Error) => void];
type WebSocketEvent = {
    data: WebSocket.Data;
    type: string;
    target: WebSocket;
};
type WebSocketError = {
    error: any;
    message: string;
    type: string;
    target: WebSocket;
};
type WebSocketClose = {
    wasClean: boolean;
    code: number;
    reason: string;
    target: WebSocket;
};
export declare namespace BridgeClient {
    interface T<S> {
        typeParameterProxy?: S;
        closeHandler: (event: WebSocketClose) => void;
        errorHandler: (event: WebSocketError) => void;
        responseDispatcher?: (event: WebSocketEvent) => void;
        responseHandlers: Map<Text<'RequestId'>, HandleOrError>;
        socketClient: WebSocket;
    }
    function make<S>(socketClient: WebSocket): T<S>;
    function activate<S>(bridgeClient: T<S>): void;
    function deactivate<S>(bridgeClient: T<S>): void;
}
export declare function cancelResponseIfError<S>(bridgeClient: BridgeClient.T<S>, id: Text<'RequestId'>): (errorValue?: Error) => void;
export {};
