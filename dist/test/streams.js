"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const streams_1 = require("@src/streams");
const chai_1 = require("chai");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo(push, close) {
    await sleep(10);
    push(1);
    await sleep(10);
    push(2);
    await sleep(10);
    push(3);
    await sleep(10);
    push(4);
    await sleep(10);
    close();
}
async function errorDemo(push, error, close) {
    await sleep(10);
    push(1);
    await sleep(10);
    push(2);
    await sleep(10);
    error(new Error('unknown'));
    await sleep(10);
    push(4);
    await sleep(10);
    close();
}
describe('held push stream (tests can be flaky)', () => {
    it('should return all demo values if bound immediately', async () => {
        const [push, , close, stream] = streams_1.pushStream();
        const heldStream = streams_1.hold(stream);
        demo(push, close);
        const result = await streams_1.toList(heldStream);
        chai_1.expect(result).to.deep.equal([1, 2, 3, 4]);
    });
    it('should return some demo values if bound later on', async () => {
        const [push, , close, stream] = streams_1.pushStream();
        const heldStream = streams_1.hold(stream);
        demo(push, close);
        await sleep(38);
        const result = await streams_1.toList(heldStream);
        chai_1.expect(result).to.deep.equal([3, 4]);
    });
    it('should return last demo value if bound at the end', async () => {
        const [push, , close, stream] = streams_1.pushStream();
        const heldStream = streams_1.hold(stream);
        demo(push, close);
        await sleep(60);
        const result = await streams_1.toList(heldStream);
        chai_1.expect(result).to.deep.equal([4]);
    });
    it('should return first errorDemo values if bound immediately', async () => {
        const [push, error, close, stream] = streams_1.pushStream();
        const heldStream = streams_1.hold(stream);
        errorDemo(push, error, close);
        const results = [];
        try {
            await streams_1.observe(value => results.push(value), heldStream);
            chai_1.expect(false).to.equal(true); // Unreachable (should throw).
        }
        catch (_a) {
            chai_1.expect(results).to.deep.equal([1, 2]);
        }
    });
    it('should return second errorDemo value if bound later', async () => {
        const [push, error, close, stream] = streams_1.pushStream();
        const heldStream = streams_1.hold(stream);
        errorDemo(push, error, close);
        await sleep(28);
        const results = [];
        try {
            await streams_1.observe(value => results.push(value), heldStream);
            chai_1.expect(false).to.equal(true); // Unreachable (should throw).
        }
        catch (_a) {
            chai_1.expect(results).to.deep.equal([2]);
        }
    });
    it('should return no errorDemo values if bound at the end', async () => {
        const [push, error, close, stream] = streams_1.pushStream();
        const heldStream = streams_1.hold(stream);
        errorDemo(push, error, close);
        await sleep(60);
        const results = [];
        try {
            await streams_1.observe(value => results.push(value), heldStream);
            chai_1.expect(false).to.equal(true); // Unreachable (should throw).
        }
        catch (_a) {
            chai_1.expect(results).to.deep.equal([]);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3Qvc3RyZWFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFnRTtBQUVoRSwrQkFBNkI7QUFFN0IsU0FBUyxLQUFLLENBQUUsRUFBVTtJQUN4QixPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFFRCxLQUFLLFVBQVUsSUFBSSxDQUFFLElBQTZCLEVBQUUsS0FBaUI7SUFDbkUsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNQLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNmLEtBQUssRUFBRSxDQUFBO0FBQ1QsQ0FBQztBQUVELEtBQUssVUFBVSxTQUFTLENBQ3RCLElBQTZCLEVBQzdCLEtBQWtDLEVBQ2xDLEtBQWlCO0lBRWpCLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNmLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lB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