import { Stream } from '@most/types';
export declare type PushableStream<T> = [(value: T) => void, () => void, Stream<T>];
export declare function heldPushStream<T>(): PushableStream<T>;
export declare function hold<T>(stream: Stream<T>): Stream<T>;
