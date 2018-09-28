import { Stream } from '@most/types';
export declare function heldPushStream<T>(): [(value: T) => void, () => void, Stream<T>];
export declare function observe<T>(f: ((item: T) => void), stream: Stream<T>): Promise<void>;
