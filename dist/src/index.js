#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require('source-map-support').install();
var client_1 = require("./client");
exports.BridgeClient = client_1.BridgeClient;
var callers_1 = require("./generated/callers");
exports.Call = callers_1.Call;
tslib_1.__exportStar(require("./streams"), exports);
const WebSocket = require("ws");
const client_2 = require("./client");
const callers_2 = require("./generated/callers");
const ws = new WebSocket('http://127.0.0.1:3000');
const client = client_2.BridgeClient.make(ws);
callers_2.Call.DummyManager.addInts(client, undefined, { a: 3, b: 4 });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBRXZDLG1DQUF1QztBQUE5QixnQ0FBQSxZQUFZLENBQUE7QUFDckIsK0NBQTBDO0FBQWpDLHlCQUFBLElBQUksQ0FBQTtBQUViLG9EQUF5QjtBQVd6QixnQ0FBK0I7QUFFL0IscUNBQXVDO0FBQ3ZDLGlEQUEwQztBQUMxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ2pELE1BQU0sTUFBTSxHQUFHLHFCQUFZLENBQUMsSUFBSSxDQUFTLEVBQUUsQ0FBQyxDQUFBO0FBQzVDLGNBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBIn0=