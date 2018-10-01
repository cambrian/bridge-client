import { Stream } from '@most/types';
export declare type PushableStream<T> = [(value: T) => void, () => void, Stream<T>];
export declare function heldPushStream<T>(): PushableStream<T>;
export declare function drain<T>(stream: Stream<T>): Promise<void>;
export declare function observe<T>(f: ((item: T) => void), stream: Stream<T>): Promise<void>;
