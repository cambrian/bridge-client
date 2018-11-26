export declare type SchemaRef = 'AddIntsRequest' | 'Baker' | 'BakersResponse' | 'Boolean' | 'ConcatTextAuthRequest' | 'ConcatTextAuthResponse' | 'DelegateFraction' | 'DelegateInfo' | 'IAddIntsRequest' | 'IBaker' | 'IBakersResponse' | 'IConcatTextAuthRequest' | 'IConcatTextAuthResponse' | 'IDelegateFraction' | 'IDelegateInfo' | 'IEndOfResults' | 'IHeartbeat' | 'IImplicitResponse' | 'ILedgerOperation' | 'IOperationResponse' | 'IOriginatedAddress' | 'IOverviewResponse' | 'IRequestMessage' | 'IResponseMessage' | 'IResult' | 'IResult<T>' | 'IRpcResponse' | 'IRpcResponse<T>' | 'IRpcResponseClientException' | 'IRpcResponseServerException' | 'ITimeRate' | 'ITimeSize' | 'ImplicitResponse' | 'K' | 'LedgerOperation' | 'LedgerOperationType' | 'OperationResponse' | 'OriginatedAddress' | 'OverviewResponse' | 'RequestMessage' | 'ResponseMessage' | 'RpcResponse' | 'StreamingResponse' | 'T' | 'T_1' | 'T_2' | 'T_3' | 'Tagged' | 'Text' | 'TimeRate' | 'TimeSize' | 'Unit' | 'V712406' | 'string' | 'number' | 'boolean' | 'symbol';
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
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
            'required': string[];
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
            'required': string[];
            'type': string;
        };
        'ConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'fraction': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'name': {
                    'type': string;
                };
            };
            'required': string[];
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
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
            'required': string[];
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
            'required': string[];
            'type': string;
        };
        'IConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'fraction': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'name': {
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'IEndOfResults': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'IHeartbeat': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'time': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
            'required': string[];
            'type': string;
        };
        'IOriginatedAddress': {
            'properties': {
                'balance': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'ledger': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'IOverviewResponse': {
            'properties': {
                'bakerCount': {
                    'type': string;
                };
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
            'required': string[];
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
            'required': string[];
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
            'required': string[];
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
            'required': string[];
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
            'required': string[];
            'type': string;
        };
        'IRpcResponseServerException': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'ITimeRate': {
            'properties': {
                'rate': {
                    'type': string;
                };
                'time': {
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'ITimeSize': {
            'properties': {
                'size': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'time': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'time': {
                    'type': string;
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
            'required': string[];
            'type': string;
        };
        'OriginatedAddress': {
            'properties': {
                'balance': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'ledger': {
                    'items': {
                        '$ref': string;
                    };
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'OverviewResponse': {
            'properties': {
                'bakerCount': {
                    'type': string;
                };
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
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
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
            };
            'required': string[];
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
                'required': string[];
                'type': string;
                '$ref'?: undefined;
            } | {
                '$ref': string;
                'properties'?: undefined;
                'required'?: undefined;
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
                'required': string[];
                'type': string;
            } | {
                'type': string;
                'properties'?: undefined;
                'required'?: undefined;
            })[];
        };
        'TimeRate': {
            'properties': {
                'rate': {
                    'type': string;
                };
                'time': {
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'TimeSize': {
            'properties': {
                'size': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'required': string[];
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                        'required'?: undefined;
                    })[];
                };
                'time': {
                    'type': string;
                };
            };
            'required': string[];
            'type': string;
        };
        'Unit': {
            'items': {
                '$ref': string;
            };
            'type': string;
        };
        'V712406': {
            'enum': string[];
            'type': string;
        };
    };
};
