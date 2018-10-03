export declare type V555894 = 'Bridge Typings Version 555894';
export declare type Tagged<T extends string, K> = {
    TagDoNotUse: T;
} | K;
export declare type Text<T extends string> = Tagged<T, string>;
export declare type SerializationFormat = 'Haskell' | 'JSON';
export declare type Headers = IHeaders;
export interface IHeaders {
    format: SerializationFormat;
    token?: Text<'AuthToken'>;
}
export declare type RpcClientException = IBadAuth | IBadCall;
export interface IBadAuth {
    tag: 'BadAuth';
}
export interface IBadCall {
    tag: 'BadCall';
    contents: [SerializationFormat, Text<'Request'>];
}
export declare type Either<T1, T2> = Left<T1> | Right<T2>;
export interface Left<T> {
    Left: T;
}
export interface Right<T> {
    Right: T;
}
export declare type ResultItem<T> = IResult<T> | IEndOfResults;
export interface IResult<T> {
    tag: 'Result';
    contents: T;
}
export interface IEndOfResults {
    tag: 'EndOfResults';
}
export declare type RequestMessage = IRequestMessage;
export interface IRequestMessage {
    id: Text<'RequestId'>;
    headers: Headers;
    route: Text<'Route'>;
    reqText: Text<'Request'>;
}
export declare type ResponseMessage = IResponseMessage;
export interface IResponseMessage {
    requestId: Text<'RequestId'>;
    resText: Text<'Response'>;
}
export declare type AddIntsRequest = IAddIntsRequest;
export interface IAddIntsRequest {
    a: number;
    b: number;
}
export declare type ConcatTextAuthRequest = IConcatTextAuthRequest;
export interface IConcatTextAuthRequest {
    a: string;
    b: string;
}
export declare type ConcatTextAuthResponse = IConcatTextAuthResponse;
export interface IConcatTextAuthResponse {
    result: string;
}
