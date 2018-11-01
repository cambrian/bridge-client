import { Disposable, Scheduler, Sink, Stream, Time } from '@most/types'

import { MulticastSource } from '@most/core'
import { observe } from './utility'

export function hold<T> (stream: Stream<T>): Stream<T> {
  const heldStream = new Hold(stream)
  // If a tree falls in the forest and no one is there to hear it, it still makes a sound.
  // Attach an observer to materialize held values even before other observers are attached.
  observe(() => undefined, heldStream).catch(() => undefined)
  return heldStream
}

class Hold<T> extends MulticastSource<T> {
  heldValue?: T
  closed: Boolean
  errored: Boolean

  constructor (source: Stream<T>) {
    super(source)
    this.closed = false
    this.errored = false
  }

  run (sink: Sink<T>, scheduler: Scheduler): Disposable {
    if (!this.errored) {
      const time = scheduler.currentTime()
      if (this.heldValue) tryEvent(time, this.heldValue, sink)
      if (this.closed) tryEnd(time, sink) // Gracefully handle late binds.
    }

    // Generic multicast logic.
    return super.run(sink, scheduler)
  }

  event (time: Time, value: T): void {
    this.heldValue = value
    super.event(time, value)
  }

  end (time: Time): void {
    this.closed = true
    super.end(time)
  }

  error (time: Time, errorValue: Error): void {
    this.errored = true
    super.error(time, errorValue)
  }
}

function tryEvent<T> (time: Time, value: T, sink: Sink<T>): void {
  try {
    sink.event(time, value)
  } catch (errorValue) {
    sink.error(time, errorValue)
  }
}

function tryEnd<T> (time: Time, sink: Sink<T>): void {
  try {
    sink.end(time)
  } catch (errorValue) {
    sink.error(time, errorValue)
  }
}
