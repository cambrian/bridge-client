// Not an actual test, but good to make sure this works when updating types.
import * as WebSocket from 'isomorphic-ws'

import { BridgeClient, DummyManager, Server, observe } from '@src'

async function makeSocket (): Promise<WebSocket> {
  return new Promise<WebSocket>((resolve, _) => {
    const ws = new WebSocket('http://127.0.0.1:3000')
    ws.on('open', () => resolve(ws))
  })
}

async function run (): Promise<void> {
  const ws = await makeSocket()
  const client = BridgeClient.make<Server.DummyManager>(ws)

  const result = await DummyManager.addInts(client, { a: 3, b: 4 })
  console.log(result) // Output: 7

  try {
    const result = await DummyManager.addIntsBad(client, { a: 3, b: 4 })
    console.log(result)
  } catch (exception) {
    console.log(exception.message) // Output: [client] request timed out (1)
  }

  const stream = DummyManager.echoThrice(client, 1337)
  await observe(console.log, stream) // Output: 1337, 1338, 1339

  try {
    const stream = DummyManager.echoThriceBad(client, 1337)
    await observe(console.log, stream)
  } catch (exception) {
    console.log(exception.message) // Output (usually): [client] request timed out (1)
  }

  const fizzBuzz = { a: 'Fizz', b: 'Buzz' }
  const resultAuth = await DummyManager.concatTextAuth(client, 'Token', fizzBuzz)
  console.log(resultAuth) // Output: { result: 'FizzBuzz' }

  const streamAuth = DummyManager.echoThriceAuth(client, 'Token', '1337')
  await observe(console.log, streamAuth) // Output: '1337' (x1)

  const voidResult = await DummyManager.getVoid(client)
  console.log(voidResult) // Output: undefined (x1)

  const voidStream = DummyManager.getVoidStream(client)
  await observe(console.log, voidStream) // Output: undefined (x1)
  ws.close()
}

run()
