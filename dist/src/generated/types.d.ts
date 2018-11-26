export declare type V712406 = 'Bridge Typings Version 712406';
export declare type Tagged<T extends string, K> = {
    TagDoNotUse: T;
} | K;
export declare type Text<T extends string> = Tagged<T, string>;
export declare type Unit = Array<Boolean>;
export declare type RpcResponse<T> = IRpcResponseClientException | IRpcResponseServerException | IRpcResponse<T>;
export interface IRpcResponseClientException {
    tag: 'RpcResponseClientException';
    contents: string;
}
export interface IRpcResponseServerException {
    tag: 'RpcResponseServerException';
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
    id: Tagged<'RequestId', string>;
    headers: {
        [k: string]: string;
    };
    route: Tagged<'Route', string>;
    reqText: Tagged<'Request', string>;
}
export declare type ResponseMessage = IResponseMessage;
export interface IResponseMessage {
    requestId: Tagged<'RequestId', string>;
    resText: Tagged<'Response', string>;
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
export declare type OverviewResponse = IOverviewResponse;
export interface IOverviewResponse {
    bakerCount: number;
    totalRewards: Tagged<'XTZ', number>;
    bondsOverTime: TimeSize[];
    totalDelegationsOverTime: TimeSize[];
    interestRatesOverTime: TimeRate[];
    delegateDistribution: DelegateFraction[];
    retrieved: string;
}
export declare type BakersResponse = IBakersResponse;
export interface IBakersResponse {
    bakers: Baker[];
    retrieved: string;
}
export declare type ImplicitResponse = IImplicitResponse;
export interface IImplicitResponse {
    balance: Tagged<'XTZ', number>;
    originated: OriginatedAddress[];
    retrieved: string;
}
export declare type OperationResponse = IOperationResponse;
export interface IOperationResponse {
    baked: boolean;
    error: boolean;
    confirmations?: number;
    blockHash?: Tagged<'TzBlockHash', string>;
    retrieved: string;
}
export declare type Baker = IBaker;
export interface IBaker {
    name: string;
    description: string;
    hash: Tagged<'Implicit', Tagged<'TzAddress', string>>;
    fee: Tagged<'XTZ', number>;
    bond: Tagged<'XTZ', number>;
    totalDelegations: Tagged<'XTZ', number>;
    overDelegated: boolean;
    cyclesOutstanding: number;
    interestRatesOverTime: TimeRate[];
    rewardsOverTime: TimeSize[];
}
export declare type DelegateFraction = IDelegateFraction;
export interface IDelegateFraction {
    delegate: Tagged<'Implicit', Tagged<'TzAddress', string>>;
    fraction: number;
}
export declare type DelegateInfo = IDelegateInfo;
export interface IDelegateInfo {
    hash: Tagged<'Implicit', Tagged<'TzAddress', string>>;
    name: string;
}
export declare type LedgerOperation = ILedgerOperation;
export interface ILedgerOperation {
    operationType: LedgerOperationType;
    hash: Tagged<'TzOperationHash', string>;
    from?: Tagged<'TzAddress', string>;
    size: Tagged<'XTZ', number>;
    blockHash?: Tagged<'TzBlockHash', string>;
    time: string;
}
export declare type LedgerOperationType = 'Deposit' | 'Reward' | 'Withdrawal';
export declare type OriginatedAddress = IOriginatedAddress;
export interface IOriginatedAddress {
    hash: Tagged<'Originated', Tagged<'TzAddress', string>>;
    delegate: DelegateInfo;
    balance: Tagged<'XTZ', number>;
    ledger: LedgerOperation[];
}
export declare type TimeRate = ITimeRate;
export interface ITimeRate {
    time: string;
    rate: number;
}
export declare type TimeSize = ITimeSize;
export interface ITimeSize {
    time: string;
    size: Tagged<'XTZ', number>;
}
