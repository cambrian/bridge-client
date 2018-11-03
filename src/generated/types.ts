export type V296236 = 'Bridge Typings Version 296236'

export type Tagged<T extends string, K> = { TagDoNotUse: T } | K

export type Text<T extends string> = Tagged<T, string>

export type Unit = Array<Boolean>

export type RpcResponse<T> = IRpcResponseClientException | IRpcResponseServerException | IRpcResponse<T>

export interface IRpcResponseClientException {
  tag: 'RpcResponseClientException'
  contents: string
}

export interface IRpcResponseServerException {
  tag: 'RpcResponseServerException'
  contents: string
}

export interface IRpcResponse<T> {
  tag: 'RpcResponse'
  contents: T
}

export type StreamingResponse<T> = IHeartbeat | IResult<T> | IEndOfResults

export interface IHeartbeat {
  tag: 'Heartbeat'
}

export interface IResult<T> {
  tag: 'Result'
  contents: T
}

export interface IEndOfResults {
  tag: 'EndOfResults'
}

export type RequestMessage = IRequestMessage

export interface IRequestMessage {
  id: Tagged<'RequestId', string>
  headers: {[k: string]: string}
  route: Tagged<'Route', string>
  reqText: Tagged<'Request', string>
}

export type ResponseMessage = IResponseMessage

export interface IResponseMessage {
  requestId: Tagged<'RequestId', string>
  resText: Tagged<'Response', string>
}

export type AddIntsRequest = IAddIntsRequest

export interface IAddIntsRequest {
  a: number
  b: number
}

export type ConcatTextAuthRequest = IConcatTextAuthRequest

export interface IConcatTextAuthRequest {
  a: string
  b: string
}

export type ConcatTextAuthResponse = IConcatTextAuthResponse

export interface IConcatTextAuthResponse {
  result: string
}

export type Baker = IBaker

export interface IBaker {
  name: string
  description: string
  hash: Tagged<'TzImplicitPkh', string>
  fee: Tagged<'XTZ', number>
  bond: Tagged<'XTZ', number>
  totalDelegations: Tagged<'XTZ', number>
  overDelegated: boolean
  cyclesOutstanding: number
  interestRatesOverTime: TimestampRate[]
  rewardsOverTime: TimestampSize[]
}

export type DelegateFraction = IDelegateFraction

export interface IDelegateFraction {
  delegate: Tagged<'TzImplicitPkh', string>
  fraction: number
}

export type DelegateInfo = IDelegateInfo

export interface IDelegateInfo {
  hash: Tagged<'TzImplicitPkh', string>
  name: string
}

export type LedgerOperation = ILedgerOperation

export interface ILedgerOperation {
  operationType: LedgerOperationType
  hash: Tagged<'TzOperationHash', string>
  from?: Tagged<'TzAccountHash', string>
  size: Tagged<'XTZ', number>
  blockHash?: Tagged<'TzBlockHash', string>
  timestamp: string
}

export type LedgerOperationType = 'Deposit' | 'Reward' | 'Withdrawal'

export type OriginatedAccount = IOriginatedAccount

export interface IOriginatedAccount {
  hash: Tagged<'TzOriginatedHash', string>
  delegate: DelegateInfo
  balance: Tagged<'XTZ', number>
  ledger: LedgerOperation[]
}

export type TimestampRate = ITimestampRate

export interface ITimestampRate {
  timestamp: string
  rate: number
}

export type TimestampSize = ITimestampSize

export interface ITimestampSize {
  timestamp: string
  size: Tagged<'XTZ', number>
}

export type OverviewResponse = IOverviewResponse

export interface IOverviewResponse {
  minerCount: number
  totalRewards: Tagged<'XTZ', number>
  bondsOverTime: TimestampSize[]
  totalDelegationsOverTime: TimestampSize[]
  interestRatesOverTime: TimestampRate[]
  delegateDistribution: DelegateFraction[]
  retrieved: string
}

export type BakersResponse = IBakersResponse

export interface IBakersResponse {
  bakers: Baker[]
  retrieved: string
}

export type ImplicitResponse = IImplicitResponse

export interface IImplicitResponse {
  balance: Tagged<'XTZ', number>
  originated: OriginatedAccount[]
  retrieved: string
}

export type OperationResponse = IOperationResponse

export interface IOperationResponse {
  baked: boolean
  error: boolean
  confirmations?: number
  blockHash?: Tagged<'TzBlockHash', string>
  retrieved: string
}
