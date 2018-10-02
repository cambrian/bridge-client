import * as Events from 'events'

import { Disposable, Scheduler, Sink, Stream, Time } from '@most/types'
import { MulticastSource, until } from '@most/core'

import { fromEvent } from 'most-from-event'
import { observe } from './utility'

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

export function hold<T> (stream: Stream<T>): Stream<T> {
  const heldStream = new Hold(stream)
  // Force latest value to materialize.
  observe(() => undefined, heldStream)
  return heldStream
}

class Hold<T> extends MulticastSource<T> {
  heldValue?: T
  closed: Boolean

  constructor (source: Stream<T>) {
    super(source)
    this.closed = false
    this.heldValue = undefined
  }

  run (sink: Sink<T>, scheduler: Scheduler): Disposable {
    let time = scheduler.currentTime()
    this.tryFlushLatest(sink, time)
    if (this.closed) sink.end(time)
    return super.run(sink, scheduler)
  }

  event (time: Time, value: T): void {
    this.heldValue = value
    super.event(time, value)
  }

  tryFlushLatest (sink: Sink<T>, time: Time): void {
    if (this.heldValue) tryEvent(time, this.heldValue, sink)
  }

  end (time: Time): void {
    this.closed = true
    this.sinks.forEach(sink => sink.end(time))
  }
}

function tryEvent<T> (t: Time, x: T, sink: Sink<T>): void {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}
