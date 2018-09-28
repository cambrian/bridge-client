import * as Events from 'events'

import { runEffects, tap, until } from '@most/core'

import { Stream } from '@most/types'
import { fromEvent } from 'most-from-event'
import { hold } from './hold'
import { newDefaultScheduler } from '@most/scheduler'

// An imperative stream that holds its most recent value (even after the stream is closed).
export function heldPushStream<T> (): [(value: T) => void, () => void, Stream<T>] {
  let emitter = new Events.EventEmitter()
  let push = (item: T) => emitter.emit('pushEvent', item)
  let close = () => emitter.emit('closeEvent')
  let stream = hold(until(fromEvent('closeEvent', emitter), fromEvent('pushEvent', emitter)))
  return [push, close, stream]
}

// Drains the stream to completion or error (promise rejection).
function drain<T> (stream: Stream<T>): Promise<void> {
  return runEffects(stream, newDefaultScheduler())
}

// Runs drain on a stream whose side effect is running f per element.
export function observe<T> (f: ((item: T) => void), stream: Stream<T>): Promise<void> {
  return drain(tap(f, stream))
}
