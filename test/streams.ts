import { heldPushStream, observe, toList } from '@src/streams'

import { expect } from 'chai'

function sleep (ms: number): Promise<void> {
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

async function errorDemo (
  push: (value: number) => void,
  error: (errorValue: Error) => void,
  close: () => void
): Promise<void> {
  await sleep(10)
  push(1)
  await sleep(10)
  push(2)
  await sleep(10)
  error(new Error('unknown'))
  await sleep(10)
  push(4)
  await sleep(10)
  close()
}

describe('held push stream (tests are flaky)', () => {
  it('should return all demo values if bound immediately', async () => {
    const [push, , close, stream] = heldPushStream<number>()
    demo(push, close)
    const result = await toList(stream)
    expect(result).to.deep.equal([1, 2, 3, 4])
  })

  it('should return some demo values if bound later on', async () => {
    const [push, , close, stream] = heldPushStream<number>()
    demo(push, close)
    await sleep(38)
    const result = await toList(stream)
    expect(result).to.deep.equal([3, 4])
  })

  it('should return last demo value if bound at the end', async () => {
    const [push, , close, stream] = heldPushStream<number>()
    demo(push, close)
    await sleep(60)
    const result = await toList(stream)
    expect(result).to.deep.equal([4])
  })

  it('should return first errorDemo values if bound immediately', async () => {
    const [push, error, close, stream] = heldPushStream<number>()
    errorDemo(push, error, close)
    const results: Array<number> = []
    try {
      await observe<number>(value => results.push(value), stream)
      expect(false).to.equal(true) // Unreachable (should throw).
    } catch {
      expect(results).to.deep.equal([1, 2])
    }
  })

  it('should return second errorDemo value if bound later', async () => {
    const [push, error, close, stream] = heldPushStream<number>()
    errorDemo(push, error, close)
    await sleep(28)
    const results: Array<number> = []
    try {
      await observe<number>(value => results.push(value), stream)
      expect(false).to.equal(true) // Unreachable (should throw).
    } catch {
      expect(results).to.deep.equal([2])
    }
  })

  it('should return no errorDemo values if bound at the end', async () => {
    const [push, error, close, stream] = heldPushStream<number>()
    errorDemo(push, error, close)
    await sleep(60)
    const results: Array<number> = []
    try {
      await observe<number>(value => results.push(value), stream)
      expect(false).to.equal(true) // Unreachable (should throw).
    } catch {
      expect(results).to.deep.equal([])
    }
  })
})
