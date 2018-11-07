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
            'required': [
                'a',
                'b'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'required': [
                'bond',
                'cyclesOutstanding',
                'description',
                'fee',
                'hash',
                'interestRatesOverTime',
                'name',
                'overDelegated',
                'rewardsOverTime',
                'totalDelegations'
            ],
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
            'required': [
                'bakers',
                'retrieved'
            ],
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
            'required': [
                'a',
                'b'
            ],
            'type': 'object'
        },
        'ConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': 'string'
                }
            },
            'required': [
                'result'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'delegate',
                'fraction'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'hash',
                'name'
            ],
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
            'required': [
                'a',
                'b'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'required': [
                'bond',
                'cyclesOutstanding',
                'description',
                'fee',
                'hash',
                'interestRatesOverTime',
                'name',
                'overDelegated',
                'rewardsOverTime',
                'totalDelegations'
            ],
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
            'required': [
                'bakers',
                'retrieved'
            ],
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
            'required': [
                'a',
                'b'
            ],
            'type': 'object'
        },
        'IConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': 'string'
                }
            },
            'required': [
                'result'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'delegate',
                'fraction'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'hash',
                'name'
            ],
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
            'required': [
                'tag'
            ],
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
            'required': [
                'tag'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'balance',
                'originated',
                'retrieved'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'hash',
                'operationType',
                'size',
                'timestamp'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'baked',
                'error',
                'retrieved'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'balance',
                'delegate',
                'hash',
                'ledger'
            ],
            'type': 'object'
        },
        'IOverviewResponse': {
            'properties': {
                'bakerCount': {
                    'type': 'number'
                },
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'required': [
                'bakerCount',
                'bondsOverTime',
                'delegateDistribution',
                'interestRatesOverTime',
                'retrieved',
                'totalDelegationsOverTime',
                'totalRewards'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'required': [
                'headers',
                'id',
                'reqText',
                'route'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'required': [
                'requestId',
                'resText'
            ],
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
            'required': [
                'contents',
                'tag'
            ],
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
            'required': [
                'contents',
                'tag'
            ],
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
            'required': [
                'contents',
                'tag'
            ],
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
            'required': [
                'contents',
                'tag'
            ],
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
            'required': [
                'contents',
                'tag'
            ],
            'type': 'object'
        },
        'IRpcResponseServerException': {
            'properties': {
                'tag': {
                    'enum': [
                        'RpcResponseServerException'
                    ],
                    'type': 'string'
                }
            },
            'required': [
                'tag'
            ],
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
            'required': [
                'rate',
                'timestamp'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'size',
                'timestamp'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'balance',
                'originated',
                'retrieved'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'hash',
                'operationType',
                'size',
                'timestamp'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'baked',
                'error',
                'retrieved'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'balance',
                'delegate',
                'hash',
                'ledger'
            ],
            'type': 'object'
        },
        'OverviewResponse': {
            'properties': {
                'bakerCount': {
                    'type': 'number'
                },
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'number'
                        }
                    ]
                }
            },
            'required': [
                'bakerCount',
                'bondsOverTime',
                'delegateDistribution',
                'interestRatesOverTime',
                'retrieved',
                'totalDelegationsOverTime',
                'totalRewards'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'required': [
                'headers',
                'id',
                'reqText',
                'route'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
                            'type': 'object'
                        },
                        {
                            'type': 'string'
                        }
                    ]
                }
            },
            'required': [
                'requestId',
                'resText'
            ],
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
                    'required': [
                        'TagDoNotUse'
                    ],
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
                    'required': [
                        'TagDoNotUse'
                    ],
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
            'required': [
                'rate',
                'timestamp'
            ],
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
                            'required': [
                                'TagDoNotUse'
                            ],
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
            'required': [
                'size',
                'timestamp'
            ],
            'type': 'object'
        },
        'Unit': {
            'items': {
                '$ref': '#/definitions/Boolean'
            },
            'type': 'array'
        },
        'V705328': {
            'enum': [
                'Bridge Typings Version 705328'
            ],
            'type': 'string'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRlZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF5RGEsUUFBQSxPQUFPLEdBQUc7SUFDckIsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhLEVBQUU7UUFDYixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsR0FBRztnQkFDSCxHQUFHO2FBQ0o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsbUJBQW1CLEVBQUU7b0JBQ25CLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sS0FBSztxQ0FDTjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFB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