"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Events = require("events");
const core_1 = require("@most/core");
const most_from_event_1 = require("most-from-event");
const scheduler_1 = require("@most/scheduler");
// Drains the stream to completion or error (promise rejection).
function drain(stream) {
    return core_1.runEffects(stream, scheduler_1.newDefaultScheduler());
}
exports.drain = drain;
// Runs drain on a stream whose side effect is running f per element.
function observe(f, stream) {
    return drain(core_1.tap(f, stream));
}
exports.observe = observe;
// Observe a stream into a list.
async function toList(stream) {
    const list = [];
    await observe(value => list.push(value), stream);
    return list;
}
exports.toList = toList;
// An imperatively-pushable stream (see type above).
function pushStream() {
    const emitter = new Events.EventEmitter();
    const push = (item) => emitter.emit('pushEvent', item);
    const close = () => emitter.emit('closeEvent');
    const error = (errorValue) => emitter.emit('errorEvent', errorValue);
    const dataStream = most_from_event_1.fromEvent('pushEvent', emitter);
    const errorStream = core_1.fromPromise(new Promise((_, reject) => emitter.on('errorEvent', reject)));
    // Until first event in stream A, return values from stream B.
    const untilStream = core_1.until(most_from_event_1.fromEvent('closeEvent', emitter), core_1.merge(dataStream, errorStream));
    return [push, error, close, untilStream];
}
exports.pushStream = pushStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJlYW1zL3V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFFaEMscUNBQXVFO0FBR3ZFLHFEQUEyQztBQUMzQywrQ0FBcUQ7QUFFckQsZ0VBQWdFO0FBQ2hFLFNBQWdCLEtBQUssQ0FBSyxNQUFpQjtJQUN6QyxPQUFPLGlCQUFVLENBQUMsTUFBTSxFQUFFLCtCQUFtQixFQUFFLENBQUMsQ0FBQTtBQUNsRCxDQUFDO0FBRkQsc0JBRUM7QUFFRCxxRUFBcUU7QUFDckUsU0FBZ0IsT0FBTyxDQUFLLENBQXNCLEVBQUUsTUFBaUI7SUFDbkUsT0FBTyxLQUFLLENBQUMsVUFBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQzlCLENBQUM7QUFGRCwwQkFFQztBQUVELGdDQUFnQztBQUN6QixLQUFLLFVBQVUsTUFBTSxDQUFLLE1BQWlCO0lBQ2hELE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQTtJQUN6QixNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDaEQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBSkQsd0JBSUM7QUFNRCxvREFBb0Q7QUFDcEQsU0FBZ0IsVUFBVTtJQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUN6QyxNQUFNLElBQUksR0FBRyxDQUFDLElBQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDekQsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM5QyxNQUFNLEtBQUssR0FBRyxDQUFDLFVBQWlCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBRTNFLE1BQU0sVUFBVSxHQUFHLDJCQUFTLENBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3JELE1BQU0sV0FBVyxHQUFHLGtCQUFXLENBQUMsSUFBSSxPQUFPLENBQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FDOUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLDhEQUE4RDtJQUM5RCxNQUFNLFdBQVcsR0FBRyxZQUFLLENBQUMsMkJBQVMsQ0FBTyxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUUsWUFBSyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ2pHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUMxQyxDQUFDO0FBWkQsZ0NBWUMifQ==