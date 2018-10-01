"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Events = require("events");
const core_1 = require("@most/core");
const most_from_event_1 = require("most-from-event");
const hold_1 = require("./hold");
const scheduler_1 = require("@most/scheduler");
// An imperative stream that holds its most recent value.
function heldPushStream() {
    let emitter = new Events.EventEmitter();
    let push = (item) => emitter.emit('pushEvent', item);
    let close = () => emitter.emit('closeEvent');
    let stream = hold_1.hold(core_1.until(most_from_event_1.fromEvent('closeEvent', emitter), most_from_event_1.fromEvent('pushEvent', emitter)));
    return [push, close, stream];
}
exports.heldPushStream = heldPushStream;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RyZWFtcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFnQztBQUVoQyxxQ0FBbUQ7QUFHbkQscURBQTJDO0FBQzNDLGlDQUE2QjtBQUM3QiwrQ0FBcUQ7QUFLckQseURBQXlEO0FBQ3pELFNBQWdCLGNBQWM7SUFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDdkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3ZELElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDNUMsSUFBSSxNQUFNLEdBQUcsV0FBSSxDQUFDLFlBQUssQ0FBQywyQkFBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsRUFBRSwyQkFBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0YsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDOUIsQ0FBQztBQU5ELHdDQU1DO0FBRUQsZ0VBQWdFO0FBQ2hFLFNBQWdCLEtBQUssQ0FBSyxNQUFpQjtJQUN6QyxPQUFPLGlCQUFVLENBQUMsTUFBTSxFQUFFLCtCQUFtQixFQUFFLENBQUMsQ0FBQTtBQUNsRCxDQUFDO0FBRkQsc0JBRUM7QUFFRCxxRUFBcUU7QUFDckUsU0FBZ0IsT0FBTyxDQUFLLENBQXNCLEVBQUUsTUFBaUI7SUFDbkUsT0FBTyxLQUFLLENBQUMsVUFBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQzlCLENBQUM7QUFGRCwwQkFFQyJ9