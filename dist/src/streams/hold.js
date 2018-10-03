"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
const core_1 = require("@most/core");
// An imperative stream that holds its most recent value.
function heldPushStream() {
    const [push, error, close, stream] = utility_1.pushStream();
    return [push, error, close, hold(stream)];
}
exports.heldPushStream = heldPushStream;
function hold(stream) {
    const heldStream = new Hold(stream);
    // If a tree falls in the forest and no one is there to hear it, it still makes a sound.
    // Attach an observer to materialize held values even before other observers are attached.
    utility_1.observe(() => undefined, heldStream).catch(() => undefined);
    return heldStream;
}
exports.hold = hold;
class Hold extends core_1.MulticastSource {
    constructor(source) {
        super(source);
        this.closed = false;
        this.errored = false;
    }
    run(sink, scheduler) {
        if (!this.errored) {
            const time = scheduler.currentTime();
            if (this.heldValue)
                tryEvent(time, this.heldValue, sink);
            if (this.closed)
                tryEnd(time, sink); // Gracefully handle late binds.
        }
        // Generic multicast logic.
        return super.run(sink, scheduler);
    }
    event(time, value) {
        this.heldValue = value;
        super.event(time, value);
    }
    end(time) {
        this.closed = true;
        super.end(time);
    }
    error(time, errorValue) {
        this.errored = true;
        super.error(time, errorValue);
    }
}
function tryEvent(time, value, sink) {
    try {
        sink.event(time, value);
    }
    catch (errorValue) {
        sink.error(time, errorValue);
    }
}
function tryEnd(time, sink) {
    try {
        sink.end(time);
    }
    catch (errorValue) {
        sink.error(time, errorValue);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9sZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJlYW1zL2hvbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBK0Q7QUFFL0QscUNBQTRDO0FBRTVDLHlEQUF5RDtBQUN6RCxTQUFnQixjQUFjO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxvQkFBVSxFQUFLLENBQUE7SUFDcEQsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLElBQUksQ0FBSyxNQUFpQjtJQUN4QyxNQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQyx3RkFBd0Y7SUFDeEYsMEZBQTBGO0lBQzFGLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMzRCxPQUFPLFVBQVUsQ0FBQTtBQUNuQixDQUFDO0FBTkQsb0JBTUM7QUFFRCxNQUFNLElBQVEsU0FBUSxzQkFBa0I7SUFLdEMsWUFBYSxNQUFpQjtRQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsR0FBRyxDQUFFLElBQWEsRUFBRSxTQUFvQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUztnQkFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDeEQsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsZ0NBQWdDO1NBQ3JFO1FBRUQsMkJBQTJCO1FBQzNCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELEtBQUssQ0FBRSxJQUFVLEVBQUUsS0FBUTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRUQsR0FBRyxDQUFFLElBQVU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUUsSUFBVSxFQUFFLFVBQWlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQy9CLENBQUM7Q0FDRjtBQUVELFNBQVMsUUFBUSxDQUFLLElBQVUsRUFBRSxLQUFRLEVBQUUsSUFBYTtJQUN2RCxJQUFJO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7S0FDeEI7SUFBQyxPQUFPLFVBQVUsRUFBRTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtLQUM3QjtBQUNILENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBSyxJQUFVLEVBQUUsSUFBYTtJQUMzQyxJQUFJO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNmO0lBQUMsT0FBTyxVQUFVLEVBQUU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7S0FDN0I7QUFDSCxDQUFDIn0=