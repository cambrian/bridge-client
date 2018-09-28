// Jacked and edited from @most/hold which has not been maintained recently.
import { Disposable, Scheduler, Sink, Stream, Time } from '@most/types'

import { MulticastSource } from '@most/core'

export function hold<A> (stream: Stream<A>): Stream<A> {
  return new Hold(stream)
}

class Hold<A> extends MulticastSource<A> {
  heldValue?: A
  closed: Boolean

  constructor (source: Stream<A>) {
    super(source)
    this.closed = false
    this.heldValue = undefined
  }

  run (sink: Sink<A>, scheduler: Scheduler): Disposable {
    let time = scheduler.currentTime()
    this.tryFlushLatest(sink, time)
    if (this.closed) sink.end(time)
    return super.run(sink, scheduler)
  }

  event (time: Time, value: A): void {
    this.heldValue = value
    super.event(time, value)
  }

  tryFlushLatest (sink: Sink<A>, time: Time): void {
    if (this.heldValue) tryEvent(time, this.heldValue, sink)
  }

  end (time: Time): void {
    this.closed = true
    this.sinks.forEach(sink => sink.end(time))
  }
}

function tryEvent<A> (t: Time, x: A, sink: Sink<A>): void {
  try {
    sink.event(t, x)
  } catch (e) {
    sink.error(t, e)
  }
}
