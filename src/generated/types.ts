export type V275704 = 'Bridge Typings Version 275704'

export type Tagged<T extends string, K> = { TagDoNotUse: T } | K

export type Text<T extends string> = Tagged<T, string>

export type DeserializeException = IDeserializeException

export type IDeserializeException = [Text<'Format'>, string]

export type RpcClientException = IBadAuth | IBadCall

export interface IBadAuth {
  tag: 'BadAuth'
}

export interface IBadCall {
  tag: 'BadCall'
  contents: DeserializeException
}

export type Either<T1, T2> = Left<T1> | Right<T2>

export interface Left<T> {
  Left: T
}

export interface Right<T> {
  Right: T
}

export type ResultItem<T> = IResult<T> | IEndOfResults

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
  route: Text<'Route'>
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
