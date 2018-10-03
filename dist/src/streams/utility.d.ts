import { Stream } from '@most/types';
export declare function drain<T>(stream: Stream<T>): Promise<void>;
export declare function observe<T>(f: ((item: T) => void), stream: Stream<T>): Promise<void>;
export declare function toList<T>(stream: Stream<T>): Promise<Array<T>>;
export declare type PushableStream<T> = [(value: T) => void, (errorValue: Error) => void, () => void, Stream<T>];
export declare function pushStream<T>(): PushableStream<T>;
