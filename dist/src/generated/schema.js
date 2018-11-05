"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = {
    '$schema': 'http://json-schema.org/draft-07/schema#',
    'definitions': {
        'AddIntsRequest': {
            'properties': {
                'a': {
                    'type': 'number'
                },
                'b': {
                    'type': 'number'
                }
            },
            'type': 'object'
        },
        'Baker': {
            'properties': {
                'bond': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'cyclesOutstanding': {
                    'type': 'number'
                },
                'description': {
                    'type': 'string'
                },
                'fee': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzImplicitPkh'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'interestRatesOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampRate'
                    },
                    'type': 'array'
                },
                'name': {
                    'type': 'string'
                },
                'overDelegated': {
                    'type': 'boolean'
                },
                'rewardsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampSize'
                    },
                    'type': 'array'
                },
                'totalDelegations': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'BakersResponse': {
            'properties': {
                'bakers': {
                    'items': {
                        '$ref': '#/definitions/IBaker'
                    },
                    'type': 'array'
                },
                'retrieved': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'Boolean': {},
        'ConcatTextAuthRequest': {
            'properties': {
                'a': {
                    'type': 'string'
                },
                'b': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'ConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'DelegateFraction': {
            'properties': {
                'delegate': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzImplicitPkh'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'fraction': {
                    'type': 'number'
                }
            },
            'type': 'object'
        },
        'DelegateInfo': {
            'properties': {
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzImplicitPkh'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'name': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IAddIntsRequest': {
            'properties': {
                'a': {
                    'type': 'number'
                },
                'b': {
                    'type': 'number'
                }
            },
            'type': 'object'
        },
        'IBaker': {
            'properties': {
                'bond': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'cyclesOutstanding': {
                    'type': 'number'
                },
                'description': {
                    'type': 'string'
                },
                'fee': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzImplicitPkh'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'interestRatesOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampRate'
                    },
                    'type': 'array'
                },
                'name': {
                    'type': 'string'
                },
                'overDelegated': {
                    'type': 'boolean'
                },
                'rewardsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampSize'
                    },
                    'type': 'array'
                },
                'totalDelegations': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'IBakersResponse': {
            'properties': {
                'bakers': {
                    'items': {
                        '$ref': '#/definitions/IBaker'
                    },
                    'type': 'array'
                },
                'retrieved': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IConcatTextAuthRequest': {
            'properties': {
                'a': {
                    'type': 'string'
                },
                'b': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IDelegateFraction': {
            'properties': {
                'delegate': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzImplicitPkh'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'fraction': {
                    'type': 'number'
                }
            },
            'type': 'object'
        },
        'IDelegateInfo': {
            'properties': {
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzImplicitPkh'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'name': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IEndOfResults': {
            'properties': {
                'tag': {
                    'enum': [
                        'EndOfResults'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IHeartbeat': {
            'properties': {
                'tag': {
                    'enum': [
                        'Heartbeat'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IImplicitResponse': {
            'properties': {
                'balance': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'originated': {
                    'items': {
                        '$ref': '#/definitions/IOriginatedAccount'
                    },
                    'type': 'array'
                },
                'retrieved': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'ILedgerOperation': {
            'properties': {
                'blockHash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzBlockHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'from': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzAccountHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzOperationHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'operationType': {
                    '$ref': '#/definitions/LedgerOperationType'
                },
                'size': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'timestamp': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IOperationResponse': {
            'properties': {
                'baked': {
                    'type': 'boolean'
                },
                'blockHash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzBlockHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'confirmations': {
                    'type': 'number'
                },
                'error': {
                    'type': 'boolean'
                },
                'retrieved': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IOriginatedAccount': {
            'properties': {
                'balance': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'delegate': {
                    '$ref': '#/definitions/IDelegateInfo'
                },
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzOriginatedHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'ledger': {
                    'items': {
                        '$ref': '#/definitions/ILedgerOperation'
                    },
                    'type': 'array'
                }
            },
            'type': 'object'
        },
        'IOverviewResponse': {
            'properties': {
                'bondsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampSize'
                    },
                    'type': 'array'
                },
                'delegateDistribution': {
                    'items': {
                        '$ref': '#/definitions/IDelegateFraction'
                    },
                    'type': 'array'
                },
                'interestRatesOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampRate'
                    },
                    'type': 'array'
                },
                'minerCount': {
                    'type': 'number'
                },
                'retrieved': {
                    'type': 'string'
                },
                'totalDelegationsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampSize'
                    },
                    'type': 'array'
                },
                'totalRewards': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'IRequestMessage': {
            'properties': {
                'headers': {
                    'additionalProperties': {
                        'type': 'string'
                    },
                    'type': 'object'
                },
                'id': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'RequestId'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'reqText': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Request'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'route': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Route'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'IResponseMessage': {
            'properties': {
                'requestId': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'RequestId'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'resText': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Response'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'IResult': {
            'properties': {
                'contents': {
                    '$ref': '#/definitions/T_3'
                },
                'tag': {
                    'enum': [
                        'Result'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IResult<T>': {
            'properties': {
                'contents': {
                    '$ref': '#/definitions/T_2'
                },
                'tag': {
                    'enum': [
                        'Result'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IRpcResponse': {
            'properties': {
                'contents': {
                    '$ref': '#/definitions/T_1'
                },
                'tag': {
                    'enum': [
                        'RpcResponse'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IRpcResponse<T>': {
            'properties': {
                'contents': {
                    '$ref': '#/definitions/T'
                },
                'tag': {
                    'enum': [
                        'RpcResponse'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IRpcResponseClientException': {
            'properties': {
                'contents': {
                    'type': 'string'
                },
                'tag': {
                    'enum': [
                        'RpcResponseClientException'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'IRpcResponseServerException': {
            'properties': {
                'contents': {
                    'type': 'string'
                },
                'tag': {
                    'enum': [
                        'RpcResponseServerException'
                    ],
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'ITimestampRate': {
            'properties': {
                'rate': {
                    'type': 'number'
                },
                'timestamp': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'ITimestampSize': {
            'properties': {
                'size': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'timestamp': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'ImplicitResponse': {
            'properties': {
                'balance': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'originated': {
                    'items': {
                        '$ref': '#/definitions/IOriginatedAccount'
                    },
                    'type': 'array'
                },
                'retrieved': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'K': {},
        'LedgerOperation': {
            'properties': {
                'blockHash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzBlockHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'from': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzAccountHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzOperationHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'operationType': {
                    '$ref': '#/definitions/LedgerOperationType'
                },
                'size': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'timestamp': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'LedgerOperationType': {
            'enum': [
                'Deposit',
                'Reward',
                'Withdrawal'
            ],
            'type': 'string'
        },
        'OperationResponse': {
            'properties': {
                'baked': {
                    'type': 'boolean'
                },
                'blockHash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzBlockHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'confirmations': {
                    'type': 'number'
                },
                'error': {
                    'type': 'boolean'
                },
                'retrieved': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'OriginatedAccount': {
            'properties': {
                'balance': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'delegate': {
                    '$ref': '#/definitions/IDelegateInfo'
                },
                'hash': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'TzOriginatedHash'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'ledger': {
                    'items': {
                        '$ref': '#/definitions/ILedgerOperation'
                    },
                    'type': 'array'
                }
            },
            'type': 'object'
        },
        'OverviewResponse': {
            'properties': {
                'bondsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampSize'
                    },
                    'type': 'array'
                },
                'delegateDistribution': {
                    'items': {
                        '$ref': '#/definitions/IDelegateFraction'
                    },
                    'type': 'array'
                },
                'interestRatesOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampRate'
                    },
                    'type': 'array'
                },
                'minerCount': {
                    'type': 'number'
                },
                'retrieved': {
                    'type': 'string'
                },
                'totalDelegationsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimestampSize'
                    },
                    'type': 'array'
                },
                'totalRewards': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'RequestMessage': {
            'properties': {
                'headers': {
                    'additionalProperties': {
                        'type': 'string'
                    },
                    'type': 'object'
                },
                'id': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'RequestId'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'reqText': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Request'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'route': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Route'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'ResponseMessage': {
            'properties': {
                'requestId': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'RequestId'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                },
                'resText': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Response'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'type': 'object'
        },
        'RpcResponse': {
            'anyOf': [
                {
                    '$ref': '#/definitions/IRpcResponseClientException'
                },
                {
                    '$ref': '#/definitions/IRpcResponseServerException'
                },
                {
                    '$ref': '#/definitions/IRpcResponse<T>'
                }
            ]
        },
        'StreamingResponse': {
            'anyOf': [
                {
                    '$ref': '#/definitions/IHeartbeat'
                },
                {
                    '$ref': '#/definitions/IResult<T>'
                },
                {
                    '$ref': '#/definitions/IEndOfResults'
                }
            ]
        },
        'T': {},
        'T_1': {},
        'T_2': {},
        'T_3': {},
        'Tagged': {
            'anyOf': [
                {
                    'properties': {
                        'TagDoNotUse': {
                            'items': {
                                'type': 'string'
                            },
                            'type': 'array'
                        }
                    },
                    'type': 'object'
                },
                {
                    '$ref': '#/definitions/K'
                }
            ]
        },
        'Text': {
            'anyOf': [
                {
                    'properties': {
                        'TagDoNotUse': {
                            'items': {
                                'type': 'string'
                            },
                            'type': 'array'
                        }
                    },
                    'type': 'object'
                },
                {
                    'type': 'string'
                }
            ]
        },
        'TimestampRate': {
            'properties': {
                'rate': {
                    'type': 'number'
                },
                'timestamp': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'TimestampSize': {
            'properties': {
                'size': {
                    'anyOf': [
                        {
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'XTZ'
                                    ],
                                    'type': 'string'
                                }
                            },
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                },
                'timestamp': {
                    'type': 'string'
                }
            },
            'type': 'object'
        },
        'Unit': {
            'items': {
                '$ref': '#/definitions/Boolean'
            },
            'type': 'array'
        },
        'V439745': {
            'enum': [
                'Bridge Typings Version 439745'
            ],
            'type': 'string'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRlZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF5RGEsUUFBQSxPQUFPLEdBQUc7SUFDckIsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhLEVBQUU7UUFDYixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsbUJBQW1CLEVBQUU7b0JBQ25CLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sS0FBSztxQ0FDTjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FB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