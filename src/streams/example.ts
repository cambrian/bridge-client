#!/usr/bin/env node

import { heldPushStream, observe } from '.'

let [push, close, stream] = heldPushStream()

function sleep (ms: number): Promise<{}> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function demo (): Promise<void> {
  await sleep(1000)
  push(1)
  await sleep(1000)
  push(2)
  await sleep(1000)
  push(3)
  await sleep(1000)
  push(4)
  await sleep(1000)
  close()
}

demo()
let forever = setInterval(() => undefined, 2147483647)
setTimeout(() => observe(x => console.log(2, x), stream)
  .then(() => console.log('Closed 2.')), 2500)
setTimeout(() => observe(x => console.log(3, x), stream)
  .then(() => console.log('Closed 3.'))
  .then(() => clearInterval(forever)), 10000)
observe(x => console.log(1, x), stream)
  .then(() => console.log('Closed 1.'))
