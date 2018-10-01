#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const helpers_1 = require("./helpers");
// MAJOR TODO: Find an automated way to type check JSON.parse results.
function makeBridgeClient(socketClient) {
    let responseQueues = new Map();
    socketClient.on('message', (data) => {
        let message = data.toString();
        let responseMessage = JSON.parse(message);
        if (helpers_1.validate(responseMessage)) {
            let b = helpers_1.validate(responseMessage);
            let queue = responseQueues.get(responseMessage.requestId);
            if (queue)
                queue.push(responseMessage.resText);
        }
    });
    socketClient.on('close', (code, reason) => console.log('Socket Closed:', code, reason));
    socketClient.on('error', error => console.log('Socket Error:', error));
    return {
        socketClient,
        responseQueues
    };
}
exports.makeBridgeClient = makeBridgeClient;
// A temporary example to be templated.
// function callAddIntsSigned (
//   bridgeClient: BridgeClient,
//   request: AddIntsSignedRequest
// ): Promise<number> {
//   let id = UUIDV4() as Text<'RequestId'>
//   let route = 'addSignedInts' as Text<'Route'>
//   let reqText = JSON.stringify(request) as Text<'Request'>
//   let headers = { format: 'JSON' as SerializationFormat }
//   let requestMessage: RequestMessage = { id, route, reqText, headers }
//   let { socketClient, responseQueues } = bridgeClient
//   // TODO: Promisify send to make this fn async.
//   // TODO: Finish using safe parse functions.
//   return new Promise<number>((resolve, reject) => {
//     responseQueues.set(id, new Queue(response => {
//       let resOrExc = safeParse(response)
//       if (isResOrExc(resOrExc)) {
//         if ('Left' in resOrExc) {
//           let exc = resOrExc.Left
//           reject(exc) // TODO: Give informative errors.
//         } else {
//           let resItem = resOrExc.Right as IResult<number>
//           resolve(resItem.contents as number)
//         }
//       }
//     }))
//     socketClient.send(JSON.stringify(requestMessage), (error) => {
//       if (error) reject('failed to send request')
//     })
//   })
// }
var streams_1 = require("./streams");
exports.observe = streams_1.observe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFTdkMsdUNBQW9DO0FBV3BDLHNFQUFzRTtBQUN0RSxTQUFnQixnQkFBZ0IsQ0FBRSxZQUF1QjtJQUN2RCxJQUFJLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBb0QsQ0FBQTtJQUNoRixZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQW9CLEVBQUUsRUFBRTtRQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDN0IsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QyxJQUFJLGtCQUFRLENBQWtCLGVBQWUsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxHQUFHLGtCQUFRLENBQWlCLGVBQWUsQ0FBQyxDQUFBO1lBQ2pELElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3pELElBQUksS0FBSztnQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMvQztJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ3ZGLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUV0RSxPQUFPO1FBQ0wsWUFBWTtRQUNaLGNBQWM7S0FDZixDQUFBO0FBQ0gsQ0FBQztBQW5CRCw0Q0FtQkM7QUFFRCx1Q0FBdUM7QUFDdkMsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQyxrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFDakQsNkRBQTZEO0FBQzdELDREQUE0RDtBQUU1RCx5RUFBeUU7QUFDekUsd0RBQXdEO0FBRXhELG1EQUFtRDtBQUNuRCxnREFBZ0Q7QUFDaEQsc0RBQXNEO0FBQ3RELHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsMERBQTBEO0FBQzFELG1CQUFtQjtBQUNuQiw0REFBNEQ7QUFDNUQsZ0RBQWdEO0FBQ2hELFlBQVk7QUFDWixVQUFVO0FBQ1YsVUFBVTtBQUVWLHFFQUFxRTtBQUNyRSxvREFBb0Q7QUFDcEQsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBRUoscUNBQW1DO0FBQTFCLDRCQUFBLE9BQU8sQ0FBQSJ9