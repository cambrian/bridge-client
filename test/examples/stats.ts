// Not an actual test, but good to make sure this works when updating types.
import * as WebSocket from 'isomorphic-ws'

import { BridgeClient, Call, Server, observe } from '@src'

async function makeSocket (): Promise<WebSocket> {
  return new Promise<WebSocket>((resolve, _) => {
    const ws = new WebSocket('http://127.0.0.1:3000')
    ws.on('open', () => resolve(ws))
  })
}

async function run (): Promise<void> {
  const ws = await makeSocket()
  const client = BridgeClient.make<Server.TezosStats>(ws)

  const overview = await Call.TezosStats.overview(client)
  console.log(overview)

  const bakers = await Call.TezosStats.bakers(client)
  console.log(bakers)

  const sanjay = await Call.TezosStats.implicit(client, 'SanjayPublicKeyHash')
  console.log(sanjay)

  try {
    await Call.TezosStats.implicit(client, 'NoahPublicKeyHash')
  } catch (exception) {
    console.log(exception.message)
  }

  const opResults = Call.TezosStats.operation(client, 'SomeDepositOpHash')
  await observe(console.log, opResults)

  try {
    const badOpResults = Call.TezosStats.operation(client, 'NonExistentDepositOpHash')
    await observe(console.log, badOpResults)
  } catch (exception) {
    console.log(exception.message)
  }

  ws.close()
}

run()
