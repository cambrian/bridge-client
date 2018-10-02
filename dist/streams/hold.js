"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Events = require("events");
const core_1 = require("@most/core");
const most_from_event_1 = require("most-from-event");
const utility_1 = require("./utility");
// An imperative stream that holds its most recent value.
function heldPushStream() {
    const emitter = new Events.EventEmitter();
    const push = (item) => emitter.emit('pushEvent', item);
    const close = () => emitter.emit('closeEvent');
    const stream = hold(core_1.until(most_from_event_1.fromEvent('closeEvent', emitter), most_from_event_1.fromEvent('pushEvent', emitter)));
    return [push, close, stream];
}
exports.heldPushStream = heldPushStream;
function hold(stream) {
    const heldStream = new Hold(stream);
    // Force latest value to materialize.
    utility_1.observe(() => undefined, heldStream);
    return heldStream;
}
exports.hold = hold;
class Hold extends core_1.MulticastSource {
    constructor(source) {
        super(source);
        this.closed = false;
        this.heldValue = undefined;
    }
    run(sink, scheduler) {
        let time = scheduler.currentTime();
        this.tryFlushLatest(sink, time);
        if (this.closed)
            sink.end(time);
        return super.run(sink, scheduler);
    }
    event(time, value) {
        this.heldValue = value;
        super.event(time, value);
    }
    tryFlushLatest(sink, time) {
        if (this.heldValue)
            tryEvent(time, this.heldValue, sink);
    }
    end(time) {
        this.closed = true;
        this.sinks.forEach(sink => sink.end(time));
    }
}
function tryEvent(t, x, sink) {
    try {
        sink.event(t, x);
    }
    catch (e) {
        sink.error(t, e);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9sZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJlYW1zL2hvbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFHaEMscUNBQW1EO0FBRW5ELHFEQUEyQztBQUMzQyx1Q0FBbUM7QUFLbkMseURBQXlEO0FBQ3pELFNBQWdCLGNBQWM7SUFDNUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDekMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3pELE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQUssQ0FBQywyQkFBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsRUFBRSwyQkFBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDN0YsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDOUIsQ0FBQztBQU5ELHdDQU1DO0FBRUQsU0FBZ0IsSUFBSSxDQUFLLE1BQWlCO0lBQ3hDLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25DLHFDQUFxQztJQUNyQyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNwQyxPQUFPLFVBQVUsQ0FBQTtBQUNuQixDQUFDO0FBTEQsb0JBS0M7QUFFRCxNQUFNLElBQVEsU0FBUSxzQkFBa0I7SUFJdEMsWUFBYSxNQUFpQjtRQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsR0FBRyxDQUFFLElBQWEsRUFBRSxTQUFvQjtRQUN0QyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDL0IsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsS0FBSyxDQUFFLElBQVUsRUFBRSxLQUFRO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxjQUFjLENBQUUsSUFBYSxFQUFFLElBQVU7UUFDdkMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsR0FBRyxDQUFFLElBQVU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0NBQ0Y7QUFFRCxTQUFTLFFBQVEsQ0FBSyxDQUFPLEVBQUUsQ0FBSSxFQUFFLElBQWE7SUFDaEQsSUFBSTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0tBQ2pCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtLQUNqQjtBQUNILENBQUMifQ==