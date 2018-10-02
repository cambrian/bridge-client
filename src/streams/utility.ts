import { runEffects, tap } from '@most/core'

import { Stream } from '@most/types'
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
