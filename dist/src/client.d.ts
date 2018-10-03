import * as WebSocket from 'ws';
import { Text } from './generated/types';
type HandleOrError = [(resText: Text<'Response'>) => void, (errorValue: Error) => void];
export declare namespace BridgeClient {
    interface T {
        closeHandler: () => void;
        errorHandler: (errorValue: Error) => void;
        responseDispatcher?: (data: WebSocket.Data) => void;
        responseHandlers: Map<Text<'RequestId'>, HandleOrError>;
        socketClient: WebSocket;
    }
    function make(socketClient: WebSocket): T;
    function activate(bridgeClient: T): void;
    function deactivate(bridgeClient: T): void;
}
export declare function cancelResponseIfError(bridgeClient: BridgeClient.T, id: Text<'RequestId'>): (errorValue?: Error) => void;
export {};
