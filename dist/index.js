#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const streams_1 = require("./streams");
exports.heldPushStream = streams_1.heldPushStream;
exports.observe = streams_1.observe;
function makeBridgeClient(socketClient) {
    let responses = new Map();
    let pushers = new Map();
    return {
        socketClient,
        responses
    };
}
exports.makeBridgeClient = makeBridgeClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFJdkMsdUNBQW1EO0FBRTFDLHlCQUZBLHdCQUFjLENBRUE7QUFBRSxrQkFGQSxpQkFBTyxDQUVBO0FBT2hDLFNBQWdCLGdCQUFnQixDQUFFLFlBQXVCO0lBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7SUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUN2QixPQUFPO1FBQ0wsWUFBWTtRQUNaLFNBQVM7S0FDVixDQUFBO0FBQ0gsQ0FBQztBQVBELDRDQU9DIn0=