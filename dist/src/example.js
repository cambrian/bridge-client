"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const _1 = require(".");
async function makeSocket() {
    return new Promise((resolve, _) => {
        const ws = new WebSocket('http://127.0.0.1:3000');
        ws.on('open', () => resolve(ws));
    });
}
async function run() {
    const ws = await makeSocket();
    const client = _1.BridgeClient.make(ws);
    const result = await _1.Call.addInts(client, undefined, { a: 3, b: 4 });
    console.log(result); // Output: 7
    // try {
    //   const result = await Call.addInts(client, 500, { a: 3, b: 4 })
    //   console.log(result)
    // } catch (exception) {
    //   console.log(exception.message) // Output: request timed out (500)
    // }
    // const stream = await Call.echoThrice(client, undefined, 1337)
    // await observe(console.log, stream) // Output: 1337 (x3)
    // try {
    //   const stream = await Call.echoThrice(client, 500, 1337)
    //   await observe(console.log, stream)
    // } catch (exception) {
    //   console.log(exception.message) // Output: request timed out (500)
    // }
    // const result2 = await Call.concatTextAuth(client, undefined, 'Token', { a: 'Fizz', b: 'Buzz' })
    // console.log(result2) // Output: { result: 'FizzBuzz' }
    // const stream2 = await Call.echoThriceAuth(client, undefined, 'Token', '1337')
    // await observe(console.log, stream2) // Output: '1337' (x3)
    ws.close();
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQStCO0FBRS9CLHdCQUErQztBQUUvQyxLQUFLLFVBQVUsVUFBVTtJQUN2QixPQUFPLElBQUksT0FBTyxDQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDakQsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsS0FBSyxVQUFVLEdBQUc7SUFDaEIsTUFBTSxFQUFFLEdBQUcsTUFBTSxVQUFVLEVBQUUsQ0FBQTtJQUM3QixNQUFNLE1BQU0sR0FBRyxlQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXBDLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsWUFBWTtJQUVoQyxRQUFRO0lBQ1IsbUVBQW1FO0lBQ25FLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsc0VBQXNFO0lBQ3RFLElBQUk7SUFFSixnRUFBZ0U7SUFDaEUsMERBQTBEO0lBRTFELFFBQVE7SUFDUiw0REFBNEQ7SUFDNUQsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixzRUFBc0U7SUFDdEUsSUFBSTtJQUVKLGtHQUFrRztJQUNsRyx5REFBeUQ7SUFFekQsZ0ZBQWdGO0lBQ2hGLDZEQUE2RDtJQUM3RCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDWixDQUFDO0FBRUQsR0FBRyxFQUFFLENBQUEifQ==