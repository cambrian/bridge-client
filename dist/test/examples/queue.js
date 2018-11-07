"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Not an actual test, but good to make sure this works when updating types.
const WebSocket = require("isomorphic-ws");
const _src_1 = require("@src");
async function makeSocket() {
    return new Promise((resolve, _) => {
        const ws = new WebSocket('http://127.0.0.1:3000');
        ws.on('open', () => resolve(ws));
    });
}
async function run() {
    const ws = await makeSocket();
    const client = _src_1.BridgeClient.make(ws);
    const result = await _src_1.Call.TezosOperationQueue.inject(client, 'SignedOperationBytes');
    console.log(result);
    ws.close();
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2V4YW1wbGVzL3F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQTRFO0FBQzVFLDJDQUEwQztBQUUxQywrQkFBMEQ7QUFFMUQsS0FBSyxVQUFVLFVBQVU7SUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ2pELEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELEtBQUssVUFBVSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHLE1BQU0sVUFBVSxFQUFFLENBQUE7SUFDN0IsTUFBTSxNQUFNLEdBQUcsbUJBQVksQ0FBQyxJQUFJLENBQTZCLEVBQUUsQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sTUFBTSxHQUFHLE1BQU0sV0FBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtJQUNwRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtBQUNaLENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQSJ9