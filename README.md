# bridge-client
A TypeScript module for interfacing with our Haskell-based backend.
- Although it is possible to edit this module from vest-hs, doing so is discouraged due to limited
  tooling. Usage of this module from vest-hs should be limited to automatic code generation.

## Installation
```bash
npm install https://github.com/1protocol/bridge-client --save
```
The version given here is tied to a particular [Manager](https://github.com/1protocol/vest-hs/tree/5df3500012a3f54225c9cbc6561253b13ce2250f) commit, which
will enable you to complete the following demo.

## Usage
[This](https://github.com/1protocol/vest-hs/releases/tag/v0.1-manager-dummy) Manager executable
must be running in its own Terminal window. If you want to try out `bridge-client` but do not
already have a TypeScript project, see the next section for a toy setup.
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

  // Second parameter is your desired timeout.
  // AddInts and EchoThrice have a built-in 250 ms server-side delay.
  const result = await Call.addInts(client, undefined, { a: 3, b: 4 })
  console.log(result) // Output: 7

  try {
    const result = await Call.addInts(client, 100, { a: 3, b: 4 })
    console.log(result)
  } catch (exception) {
    console.log(exception.message) // Output: request timed out (100)
  }

  const stream = await Call.echoThrice(client, undefined, 1337)
  await observe(console.log, stream) // Output: 1337 (x3)

  try {
    const stream = await Call.echoThrice(client, 100, 1337)
    await observe(console.log, stream)
  } catch (exception) {
    console.log(exception.message) // Output: request timed out (100)
  }

  const result2 = await Call.concatTextAuth(client, undefined, 'Token', { a: 'Fizz', b: 'Buzz' })
  console.log(result2) // Output: { result: 'FizzBuzz' }

  const stream2 = await Call.echoThriceAuth(client, undefined, 'Token', '1337')
  await observe(console.log, stream2) // Output: '1337' (x3)
  ws.close()
}

run()
```
Note that you are responsible for opening a WebSocket connection and passing a
WebSocket-compatible object to `BridgeClient.make`. Consider using a reconnecting WebSocket
implementation, such as [this](https://github.com/pladaria/reconnecting-websocket) repo.

## Toy Setup
Run the Manager executable as before. Then open a separate Terminal from any directory and
run these commands, which will populate a new subdirectory `bridge-test` (if this doesn't
work, ensure that parent directories do not contain a `node_modules` folder):
```bash
mkdir -p bridge-test
cd bridge-test
# You must have NPM installed at the very least...
npm install ws @types/ws https://github.com/1protocol/bridge-client typescript node
```
Copy the code from the previous section into a file `bridge-test/main.ts`. Then (from the
`bridge-test` subdirectory):
```
./node_modules/.bin/tsc --lib 'es2018' main.ts
./node_modules/.bin/node main.js
```
And you should see the desired output.
