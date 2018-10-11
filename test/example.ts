// Not an actual test, but good to make sure this works when updating types.
import * as WebSocket from 'ws'

import { BridgeClient, Call, observe } from '@src'

async function makeSocket (): Promise<WebSocket> {
  return new Promise<WebSocket>((resolve, _) => {
    const ws = new WebSocket('http://127.0.0.1:3000')
    ws.on('open', () => resolve(ws))
  })
}

async function run (): Promise<void> {
  const ws = await makeSocket()
  const client = BridgeClient.make(ws)

  // Second parameter is your desired timeout.
  // AddInts and EchoThrice have a built-in 250 ms server-side delay.
  const result = await Call.DummyManager.addInts(client, undefined, { a: 3, b: 4 })
  console.log(result) // Output: 7

  try {
    const result = await Call.DummyManager.addInts(client, 100, { a: 3, b: 4 })
    console.log(result)
  } catch (exception) {
    console.log(exception.message) // Output: request timed out (100)
  }

  const stream = await Call.DummyManager.echoThrice(client, undefined, 1337)
  await observe(console.log, stream) // Output: 1337 (x3)

  try {
    const stream = await Call.DummyManager.echoThrice(client, 100, 1337)
    await observe(console.log, stream)
  } catch (exception) {
    console.log(exception.message) // Output: request timed out (100)
  }

  const fizzBuzz = { a: 'Fizz', b: 'Buzz' }
  const result2 = await Call.DummyManager.concatTextAuth(client, undefined, 'Token', fizzBuzz)
  console.log(result2) // Output: { result: 'FizzBuzz' }

  const stream2 = await Call.DummyManager.echoThriceAuth(client, undefined, 'Token', '1337')
  await observe(console.log, stream2) // Output: '1337' (x3)
  ws.close()
}

run()
