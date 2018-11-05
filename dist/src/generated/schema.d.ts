export declare type SchemaRef = 'AddIntsRequest' | 'Baker' | 'BakersResponse' | 'Boolean' | 'ConcatTextAuthRequest' | 'ConcatTextAuthResponse' | 'DelegateFraction' | 'DelegateInfo' | 'IAddIntsRequest' | 'IBaker' | 'IBakersResponse' | 'IConcatTextAuthRequest' | 'IConcatTextAuthResponse' | 'IDelegateFraction' | 'IDelegateInfo' | 'IEndOfResults' | 'IHeartbeat' | 'IImplicitResponse' | 'ILedgerOperation' | 'IOperationResponse' | 'IOriginatedAccount' | 'IOverviewResponse' | 'IRequestMessage' | 'IResponseMessage' | 'IResult' | 'IResult<T>' | 'IRpcResponse' | 'IRpcResponse<T>' | 'IRpcResponseClientException' | 'IRpcResponseServerException' | 'ITimestampRate' | 'ITimestampSize' | 'ImplicitResponse' | 'K' | 'LedgerOperation' | 'LedgerOperationType' | 'OperationResponse' | 'OriginatedAccount' | 'OverviewResponse' | 'RequestMessage' | 'ResponseMessage' | 'RpcResponse' | 'StreamingResponse' | 'T' | 'T_1' | 'T_2' | 'T_3' | 'Tagged' | 'Text' | 'TimestampRate' | 'TimestampSize' | 'Unit' | 'V439745' | 'string' | 'number' | 'boolean' | 'symbol';
export declare const Schemas: {
    '$schema': string;
    'definitions': {
        'AddIntsRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'Baker': {
            'properties': {
                'bond': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'cyclesOutstanding': {
                    'type': string;
                };
                'description': {
                    'type': string;
                };
                'fee': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'interestRatesOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'name': {
                    'type': string;
                };
                'overDelegated': {
                    'type': string;
                };
                'rewardsOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'totalDelegations': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'BakersResponse': {
            'properties': {
                'bakers': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
            };
            'type': string;
        };
        'Boolean': {};
        'ConcatTextAuthRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'ConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': string;
                };
            };
            'type': string;
        };
        'DelegateFraction': {
            'properties': {
                'delegate': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'fraction': {
                    'type': string;
                };
            };
            'type': string;
        };
        'DelegateInfo': {
            'properties': {
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'name': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IAddIntsRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IBaker': {
            'properties': {
                'bond': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'cyclesOutstanding': {
                    'type': string;
                };
                'description': {
                    'type': string;
                };
                'fee': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'interestRatesOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'name': {
                    'type': string;
                };
                'overDelegated': {
                    'type': string;
                };
                'rewardsOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'totalDelegations': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'IBakersResponse': {
            'properties': {
                'bakers': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IConcatTextAuthRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IDelegateFraction': {
            'properties': {
                'delegate': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'fraction': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IDelegateInfo': {
            'properties': {
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'name': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IEndOfResults': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IHeartbeat': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IImplicitResponse': {
            'properties': {
                'balance': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'originated': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
            };
            'type': string;
        };
        'ILedgerOperation': {
            'properties': {
                'blockHash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'from': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'operationType': {
                    '$ref': string;
                };
                'size': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'timestamp': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IOperationResponse': {
            'properties': {
                'baked': {
                    'type': string;
                };
                'blockHash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'confirmations': {
                    'type': string;
                };
                'error': {
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IOriginatedAccount': {
            'properties': {
                'balance': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'delegate': {
                    '$ref': string;
                };
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'ledger': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
            };
            'type': string;
        };
        'IOverviewResponse': {
            'properties': {
                'bondsOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'delegateDistribution': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'interestRatesOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'minerCount': {
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
                'totalDelegationsOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'totalRewards': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'IRequestMessage': {
            'properties': {
                'headers': {
                    'additionalProperties': {
                        'type': string;
                    };
                    'type': string;
                };
                'id': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'reqText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'route': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'IResponseMessage': {
            'properties': {
                'requestId': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'resText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'IResult': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IResult<T>': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponse': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponse<T>': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponseClientException': {
            'properties': {
                'contents': {
                    'type': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponseServerException': {
            'properties': {
                'contents': {
                    'type': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'ITimestampRate': {
            'properties': {
                'rate': {
                    'type': string;
                };
                'timestamp': {
                    'type': string;
                };
            };
            'type': string;
        };
        'ITimestampSize': {
            'properties': {
                'size': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'timestamp': {
                    'type': string;
                };
            };
            'type': string;
        };
        'ImplicitResponse': {
            'properties': {
                'balance': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'originated': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
            };
            'type': string;
        };
        'K': {};
        'LedgerOperation': {
            'properties': {
                'blockHash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'from': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'operationType': {
                    '$ref': string;
                };
                'size': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'timestamp': {
                    'type': string;
                };
            };
            'type': string;
        };
        'LedgerOperationType': {
            'enum': string[];
            'type': string;
        };
        'OperationResponse': {
            'properties': {
                'baked': {
                    'type': string;
                };
                'blockHash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'confirmations': {
                    'type': string;
                };
                'error': {
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
            };
            'type': string;
        };
        'OriginatedAccount': {
            'properties': {
                'balance': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'delegate': {
                    '$ref': string;
                };
                'hash': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'ledger': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
            };
            'type': string;
        };
        'OverviewResponse': {
            'properties': {
                'bondsOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'delegateDistribution': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'interestRatesOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'minerCount': {
                    'type': string;
                };
                'retrieved': {
                    'type': string;
                };
                'totalDelegationsOverTime': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
                'totalRewards': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'RequestMessage': {
            'properties': {
                'headers': {
                    'additionalProperties': {
                        'type': string;
                    };
                    'type': string;
                };
                'id': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'reqText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'route': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'ResponseMessage': {
            'properties': {
                'requestId': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'resText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'RpcResponse': {
            'anyOf': {
                '$ref': string;
            }[];
        };
        'StreamingResponse': {
            'anyOf': {
                '$ref': string;
            }[];
        };
        'T': {};
        'T_1': {};
        'T_2': {};
        'T_3': {};
        'Tagged': {
            'anyOf': ({
                'properties': {
                    'TagDoNotUse': {
                        'items': {
                            'type': string;
                        };
                        'type': string;
                    };
                };
                'type': string;
                '$ref'?: undefined;
            } | {
                '$ref': string;
                'properties'?: undefined;
                'type'?: undefined;
            })[];
        };
        'Text': {
            'anyOf': ({
                'properties': {
                    'TagDoNotUse': {
                        'items': {
                            'type': string;
                        };
                        'type': string;
                    };
                };
                'type': string;
            } | {
                'type': string;
                'properties'?: undefined;
            })[];
        };
        'TimestampRate': {
            'properties': {
                'rate': {
                    'type': string;
                };
                'timestamp': {
                    'type': string;
                };
            };
            'type': string;
        };
        'TimestampSize': {
            'properties': {
                'size': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'timestamp': {
                    'type': string;
                };
            };
            'type': string;
        };
        'Unit': {
            'items': {
                '$ref': string;
            };
            'type': string;
        };
        'V439745': {
            'enum': string[];
            'type': string;
        };
    };
};
