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
    const overview = await _src_1.Call.TezosStats.overview(client);
    console.log(overview);
    const bakers = await _src_1.Call.TezosStats.bakers(client);
    console.log(bakers);
    const sanjay = await _src_1.Call.TezosStats.implicit(client, 'SanjayPublicKeyHash');
    console.log(sanjay);
    try {
        await _src_1.Call.TezosStats.implicit(client, 'NoahPublicKeyHash');
    }
    catch (exception) {
        console.log(exception.message);
    }
    const opResults = _src_1.Call.TezosStats.operation(client, 'SomeDepositOpHash');
    await _src_1.observe(console.log, opResults);
    try {
        const badOpResults = _src_1.Call.TezosStats.operation(client, 'NonExistentDepositOpHash');
        await _src_1.observe(console.log, badOpResults);
    }
    catch (exception) {
        console.log(exception.message);
    }
    ws.close();
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L2V4YW1wbGVzL3N0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQTRFO0FBQzVFLDJDQUEwQztBQUUxQywrQkFBMEQ7QUFFMUQsS0FBSyxVQUFVLFVBQVU7SUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ2pELEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELEtBQUssVUFBVSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHLE1BQU0sVUFBVSxFQUFFLENBQUE7SUFDN0IsTUFBTSxNQUFNLEdBQUcsbUJBQVksQ0FBQyxJQUFJLENBQW9CLEVBQUUsQ0FBQyxDQUFBO0lBRXZELE1BQU0sUUFBUSxHQUFHLE1BQU0sV0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUVyQixNQUFNLE1BQU0sR0FBRyxNQUFNLFdBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFbkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxXQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUscUJBQXFCLENBQUMsQ0FBQTtJQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRW5CLElBQUk7UUFDRixNQUFNLFdBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO0tBQzVEO0lBQUMsT0FBTyxTQUFTLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDL0I7SUFFRCxNQUFNLFNBQVMsR0FBRyxXQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtJQUN4RSxNQUFNLGNBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRXJDLElBQUk7UUFDRixNQUFNLFlBQVksR0FBRyxXQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtRQUNsRixNQUFNLGNBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO0tBQ3pDO0lBQUMsT0FBTyxTQUFTLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDL0I7SUFFRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDWixDQUFDO0FBRUQsR0FBRyxFQUFFLENBQUEifQ==