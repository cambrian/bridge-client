"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@most/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJlYW1zL3V0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBNEM7QUFHNUMsK0NBQXFEO0FBRXJELGdFQUFnRTtBQUNoRSxTQUFnQixLQUFLLENBQUssTUFBaUI7SUFDekMsT0FBTyxpQkFBVSxDQUFDLE1BQU0sRUFBRSwrQkFBbUIsRUFBRSxDQUFDLENBQUE7QUFDbEQsQ0FBQztBQUZELHNCQUVDO0FBRUQscUVBQXFFO0FBQ3JFLFNBQWdCLE9BQU8sQ0FBSyxDQUFzQixFQUFFLE1BQWlCO0lBQ25FLE9BQU8sS0FBSyxDQUFDLFVBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUM5QixDQUFDO0FBRkQsMEJBRUM7QUFFRCxnQ0FBZ0M7QUFDekIsS0FBSyxVQUFVLE1BQU0sQ0FBSyxNQUFpQjtJQUNoRCxNQUFNLElBQUksR0FBYSxFQUFFLENBQUE7SUFDekIsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ2hELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQztBQUpELHdCQUlDIn0=