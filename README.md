# bridge-client
A TypeScript module for interfacing with our Haskell-based backend.
- Although it is possible to edit this module from vest-hs, doing so is discouraged due to limited
  tooling. Usage of this module from vest-hs should be limited to automatic code generation.

## Installation
```bash
npm install https://github.com/1protocol/bridge-client#8c0ca92 --save
```
The version given here is tied to a particular [Manager](https://github.com/1protocol/vest-hs/tree/685f877b7eb48bdf8c0b48beb6c209eb11af3889) commit, which
will enable you to complete the following demo.

## Usage
Run [this](https://github.com/1protocol/vest-hs/releases/tag/v0.1-manager-dummy) executable
locally. Then:
```typescript
import * as WebSocket from 'ws'

import { BridgeClient, Call, observe } from 'bridge-client'

async function makeSocket (): Promise<WebSocket> {
  return new Promise<WebSocket>((resolve, _) => {
    const ws = new WebSocket('http://127.0.0.1:3000')
    ws.on('open', () => resolve(ws))
  })
}

async function run (): Promise<void> {
  const ws = await makeSocket()
  const client = BridgeClient.make(ws)

  const result = await Call.addInts(client, { a: 3, b: 4 })
  console.log(result) // Output: 7

  const stream = await Call.echoThrice(client, 1337)
  await observe(console.log, stream) // Output: 1337 (x3)

  const result2 = await Call.concatTextAuth(client, { a: 'Fizz', b: 'Buzz' }, 'Dummy Token')
  console.log(result2) // Output: 'FizzBuzz'

  const stream2 = await Call.echoThriceAuth(client, '1337', 'Dummy Token')
  await observe(console.log, stream2) // Output: '1337' (x3)
  ws.close()
}

run()
```
Please note that you are responsible for opening a WebSocket connection and passing a
WebSocket-compatible object to `BridgeClient.make`. Consider using a reconnecting WebSocket
implementation, such as [this](https://github.com/pladaria/reconnecting-websocket) repo.
