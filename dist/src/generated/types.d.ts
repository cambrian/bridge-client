export declare type V564424 = 'Bridge Typings Version 564424';
export declare type Tagged<T extends string, K> = {
    TagDoNotUse: T;
} | K;
export declare type Text<T extends string> = Tagged<T, string>;
export declare type RpcResponse<T> = IRpcResponseClientException | IRpcResponseServerException | IRpcResponse<T>;
export interface IRpcResponseClientException {
    tag: 'RpcResponseClientException';
    contents: string;
}
export interface IRpcResponseServerException {
    tag: 'RpcResponseServerException';
    contents: string;
}
export interface IRpcResponse<T> {
    tag: 'RpcResponse';
    contents: T;
}
export declare type StreamingResponse<T> = IHeartbeat | IResult<T> | IEndOfResults;
export interface IHeartbeat {
    tag: 'Heartbeat';
}
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
    headers: {
        [k: string]: string;
    };
    route: Text<'RawRoute'>;
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
