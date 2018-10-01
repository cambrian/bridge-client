import * as Events from 'events'

import { runEffects, tap, until } from '@most/core'

import { Stream } from '@most/types'
import { fromEvent } from 'most-from-event'
import { hold } from './hold'
import { newDefaultScheduler } from '@most/scheduler'

// Type is (push, close, stream).
export type PushableStream<T> = [(value: T) => void, () => void, Stream<T>]

// An imperative stream that holds its most recent value.
export function heldPushStream<T> (): PushableStream<T> {
  const emitter = new Events.EventEmitter()
  const push = (item: T) => emitter.emit('pushEvent', item)
  const close = () => emitter.emit('closeEvent')
  const stream = hold(until(fromEvent('closeEvent', emitter), fromEvent('pushEvent', emitter)))
  return [push, close, stream]
}

// Drains the stream to completion or error (promise rejection).
export function drain<T> (stream: Stream<T>): Promise<void> {
  return runEffects(stream, newDefaultScheduler())
}

// Runs drain on a stream whose side effect is running f per element.
export function observe<T> (f: ((item: T) => void), stream: Stream<T>): Promise<void> {
  return drain(tap(f, stream))
}
