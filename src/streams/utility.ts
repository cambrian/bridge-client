import * as Events from 'events'

import { fromPromise, merge, runEffects, tap, until } from '@most/core'

import { Stream } from '@most/types'
import { fromEvent } from 'most-from-event'
import { newDefaultScheduler } from '@most/scheduler'

// Drains the stream to completion or error (promise rejection).
export function drain<T> (stream: Stream<T>): Promise<void> {
  return runEffects(stream, newDefaultScheduler())
}

// Runs drain on a stream whose side effect is running f per element.
export function observe<T> (f: ((item: T) => void), stream: Stream<T>): Promise<void> {
  return drain(tap(f, stream))
}

// Observe a stream into a list.
export async function toList<T> (stream: Stream<T>): Promise<Array<T>> {
  const list: Array<T> = []
  await observe(value => list.push(value), stream)
  return list
}

// [push, error, close, stream]
export type PushableStream<T> =
  [(value: T) => void, (errorValue: Error) => void, () => void, Stream<T>]

// An imperatively-pushable stream (see type above).
export function pushStream<T> (): PushableStream<T> {
  const emitter = new Events.EventEmitter()
  const push = (item: T) => emitter.emit('pushEvent', item)
  const close = () => emitter.emit('closeEvent')
  const error = (errorValue: Error) => emitter.emit('errorEvent', errorValue)

  const dataStream = fromEvent<T>('pushEvent', emitter)
  const errorStream = fromPromise(new Promise<void>((_, reject) =>
    emitter.on('errorEvent', reject)))
  // Until first event in stream A, return values from stream B.
  const untilStream = until(fromEvent<void>('closeEvent', emitter), merge(dataStream, errorStream))
  return [push, error, close, untilStream]
}
