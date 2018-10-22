import { BridgeClient } from './client';
import { Text } from './generated/types';
import { SchemaRef } from './generated/schema';
import { Stream } from '@most/types';
export declare function direct<T, U, S>(bridgeClient: BridgeClient.T<S>, timeout: number | undefined, route: Text<'RawRoute'>, request: T, typeURef: SchemaRef, token?: Text<'AuthToken'>): Promise<U>;
export declare function streaming<T, U, S>(bridgeClient: BridgeClient.T<S>, timeout: number | undefined, route: Text<'RawRoute'>, request: T, typeURef: SchemaRef, token?: Text<'AuthToken'>): Stream<U>;
