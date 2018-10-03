import { Stream } from '@most/types';
import { PushableStream } from './utility';
export declare function heldPushStream<T>(): PushableStream<T>;
export declare function hold<T>(stream: Stream<T>): Stream<T>;
