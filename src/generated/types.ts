export type V564424 = 'Bridge Typings Version 564424'

export type Tagged<T extends string, K> = { TagDoNotUse: T } | K

export type Text<T extends string> = Tagged<T, string>

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
  id: Text<'RequestId'>
  headers: {[k: string]: string}
  route: Text<'RawRoute'>
  reqText: Text<'Request'>
}

export type ResponseMessage = IResponseMessage

export interface IResponseMessage {
  requestId: Text<'RequestId'>
  resText: Text<'Response'>
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
