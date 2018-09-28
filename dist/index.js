#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const streams_1 = require("./streams");
exports.observe = streams_1.observe;
// MAJOR TODO: Find a good way to type check JSON.parse results.
function makeBridgeClient(socketClient) {
    let responseStreams = new Map();
    socketClient.on('message', (data) => {
        let message = data.toString();
        let responseMessage = JSON.parse(message);
        let streamMaybe = responseStreams.get(responseMessage.requestId);
        if (streamMaybe) {
            let [push, _, stream] = streamMaybe;
        }
    });
    return {
        socketClient,
        responseStreams
    };
}
exports.makeBridgeClient = makeBridgeClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFJdkMsdUNBQW1EO0FBSzFDLGtCQUxnQixpQkFBTyxDQUtoQjtBQU9oQixnRUFBZ0U7QUFDaEUsU0FBZ0IsZ0JBQWdCLENBQUUsWUFBdUI7SUFDdkQsSUFBSSxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQTBELENBQUE7SUFFdkYsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFvQixFQUFFLEVBQUU7UUFDbEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzdCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFvQixDQUFBO1FBQzVELElBQUksV0FBVyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2hFLElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFBO1NBRXBDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPO1FBQ0wsWUFBWTtRQUNaLGVBQWU7S0FDaEIsQ0FBQTtBQUNILENBQUM7QUFqQkQsNENBaUJDIn0=