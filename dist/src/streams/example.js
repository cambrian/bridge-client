#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const [push, close, stream] = _1.heldPushStream();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
    await sleep(1000);
    push(1);
    await sleep(1000);
    push(2);
    await sleep(1000);
    push(3);
    await sleep(1000);
    push(4);
    await sleep(1000);
    close();
}
demo();
const forever = setInterval(() => undefined, 2147483647);
setTimeout(() => _1.observe(x => console.log(2, x), stream)
    .then(() => console.log('Closed 2.')), 2500);
setTimeout(() => _1.observe(x => console.log(3, x), stream)
    .then(() => console.log('Closed 3.'))
    .then(() => clearInterval(forever)), 10000);
_1.observe(x => console.log(1, x), stream)
    .then(() => console.log('Closed 1.'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJlYW1zL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsd0JBQTJDO0FBRTNDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLGlCQUFjLEVBQUUsQ0FBQTtBQUU5QyxTQUFTLEtBQUssQ0FBRSxFQUFVO0lBQ3hCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDeEQsQ0FBQztBQUVELEtBQUssVUFBVSxJQUFJO0lBQ2pCLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNQLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNQLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNQLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNQLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLEtBQUssRUFBRSxDQUFBO0FBQ1QsQ0FBQztBQUVELElBQUksRUFBRSxDQUFBO0FBQ04sTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN4RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQ3JELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDOUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztLQUNyRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNwQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDN0MsVUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUEifQ==