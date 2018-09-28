declare type SerializationFormat = 'Haskell' | 'JSON';
declare type Headers = IHeaders;
declare class Nominal<T extends string> {
    private as;
}
interface IHeaders {
    format: SerializationFormat;
    token?: Text_<'AuthToken'>;
}
declare type Text_<T> = Nominal<IText_<T>>;
declare type IText_<T> = string;
declare type RpcClientException = IBadAuth | IBadCall;
interface IBadAuth {
    tag: 'BadAuth';
}
interface IBadCall {
    tag: 'BadCall';
    contents: [SerializationFormat, string];
}
declare type Either<T1, T2> = Left<T1> | Right<T2>;
interface Left<T> {
    Left: T;
}
interface Right<T> {
    Right: T;
}
declare type RequestMessage = IRequestMessage;
interface IRequestMessage {
    id: Text_<'RequestId'>;
    headers: Headers;
    route: Text_<'Route'>;
    reqText: Text_<'Request'>;
}
declare type ResponseMessage = IResponseMessage;
interface IResponseMessage {
    requestId: Text_<'RequestId'>;
    resText: Text_<'Response'>;
}
declare type AddIntsSignedRequest = IAddIntsSignedRequest;
interface IAddIntsSignedRequest {
    a: number;
    b: number;
    sign: boolean;
}
