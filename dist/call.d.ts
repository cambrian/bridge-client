import { Text } from './generated/types';
import { Stream } from './streams';
import { BridgeClient } from './client';
import { SchemaRef } from './generated/schema';
export { V555894 } from './generated/types';
export declare function makeDirectHandler<T>(bridgeClient: BridgeClient.T, resolve: (value: T) => void, reject: (reason?: string) => void, typeTRef: SchemaRef, id: Text<'RequestId'>): [((response: any, done: () => void) => void), (() => void)];
export declare function makeStreamingHandler<T>(bridgeClient: BridgeClient.T, resolve: (value: Stream<T>) => void, reject: (reason?: string) => void, typeTRef: SchemaRef, id: Text<'RequestId'>): [((response: any, done: () => void) => void), (() => void)];
export declare function makeRequestOfAuth<T>(token?: Text<'AuthToken'>): (route: Text<'Route'>, request: T) => [Text<'RequestId'>, string];
export declare function call<T, U>(bridgeClient: BridgeClient.T, makeRequest: (route: Text<'Route'>, request: T) => [Text<'RequestId'>, string], makeResultHandler: (bridgeClient: BridgeClient.T, resolve: (value: U) => void, reject: (reason?: string) => void, resultRef: SchemaRef, id: Text<'RequestId'>) => [((response: any, done: () => void) => void), (() => void)], route: Text<'Route'>, typeURef: SchemaRef, request: T): Promise<U>;
