// Not an actual test, but good to make sure this works when updating types.
import * as WebSocket from 'ws'

import { BridgeClient, Call, Server, observe } from '@src'

async function makeSocket (): Promise<WebSocket> {
  return new Promise<WebSocket>((resolve, _) => {
    const ws = new WebSocket('http://127.0.0.1:3000')
    ws.on('open', () => resolve(ws))
  })
}

async function run (): Promise<void> {
  const ws = await makeSocket()
  const client = BridgeClient.make<Server.TezosOperationQueue>(ws)
  const result = await Call.TezosOperationQueue.inject(client, 'SignedOperationBytes')
  console.log(result)
  ws.close()
}

run()
