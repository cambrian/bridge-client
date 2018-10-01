#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const helpers_1 = require("./helpers");
var callers_1 = require("./callers");
exports.Call = callers_1.Call;
// MAJOR TODO: Find an automated way to type check JSON.parse results.
function makeBridgeClient(socketClient) {
    let responseQueues = new Map();
    socketClient.on('message', (data) => {
        let message = data.toString();
        let responseMessage = helpers_1.safeParse(message);
        // This is ugly and repetitive, but basically the type parameter is the type that is being
        // coerced to via type guard, and the string is the schema ref that is being validated against.
        if (helpers_1.validate('ResponseMessage', responseMessage)) {
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
var streams_1 = require("./streams");
exports.observe = streams_1.observe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFNdkMsdUNBQStDO0FBRS9DLHFDQUFnQztBQUF2Qix5QkFBQSxJQUFJLENBQUE7QUFXYixzRUFBc0U7QUFDdEUsU0FBZ0IsZ0JBQWdCLENBQUUsWUFBdUI7SUFDdkQsSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQW9ELENBQUE7SUFDaEYsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFvQixFQUFFLEVBQUU7UUFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzdCLElBQUksZUFBZSxHQUFHLG1CQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDeEMsMEZBQTBGO1FBQzFGLCtGQUErRjtRQUMvRixJQUFJLGtCQUFRLENBQWtCLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3pELElBQUksS0FBSztnQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMvQztJQUNILENBQUMsQ0FBQyxDQUFBO0lBRUYsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ3ZGLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUV0RSxPQUFPO1FBQ0wsWUFBWTtRQUNaLGNBQWM7S0FDZixDQUFBO0FBQ0gsQ0FBQztBQXBCRCw0Q0FvQkM7QUFFRCxxQ0FBbUM7QUFBMUIsNEJBQUEsT0FBTyxDQUFBIn0=