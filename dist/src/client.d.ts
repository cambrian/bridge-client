/// <reference types="ws" />
import * as WebSocket from 'isomorphic-ws';
import { Text } from './generated/types';
type HandleOrError = [(resText: Text<'Response'>) => void, (errorValue: Error) => void];
export declare namespace BridgeClient {
    interface T<S> {
        typeParameterProxy?: S;
        closeHandler: () => void;
        errorHandler: (errorValue: Error) => void;
        responseDispatcher?: (data: WebSocket.Data) => void;
        responseHandlers: Map<Text<'RequestId'>, HandleOrError>;
        socketClient: WebSocket;
    }
    function make<S>(socketClient: WebSocket): T<S>;
    function activate<S>(bridgeClient: T<S>): void;
    function deactivate<S>(bridgeClient: T<S>): void;
}
export declare function cancelResponseIfError<S>(bridgeClient: BridgeClient.T<S>, id: Text<'RequestId'>): (errorValue?: Error) => void;
export {};
