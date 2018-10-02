// @ts-ignore
import { heldPushStream, toList } from '@src/streams'

import { expect } from 'chai'

function sleep (ms: number): Promise<{}> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function demo (push: (value: number) => void, close: () => void): Promise<void> {
  await sleep(10)
  push(1)
  await sleep(10)
  push(2)
  await sleep(10)
  push(3)
  await sleep(10)
  push(4)
  await sleep(10)
  close()
}

describe('held push stream', () => {
  it('should return all demo values if bound immediately', async () => {
    const [push, close, stream] = heldPushStream()
    demo(push, close)
    const result = await toList(stream)
    expect(result).to.deep.equal([1, 2, 3, 4])
  })

  it('should return some demo values if bound later on', async () => {
    const [push, close, stream] = heldPushStream()
    demo(push, close)
    await sleep(25)
    const result = await toList(stream)
    expect(result).to.deep.equal([2, 3, 4])
  })

  it('should return last demo value if bound at the end', async () => {
    const [push, close, stream] = heldPushStream()
    demo(push, close)
    await sleep(60)
    const result = await toList(stream)
    expect(result).to.deep.equal([4])
  })
})
