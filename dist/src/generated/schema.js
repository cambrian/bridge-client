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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Implicit'
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
                        '$ref': '#/definitions/ITimeRate'
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
                        '$ref': '#/definitions/ITimeSize'
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Implicit'
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Implicit'
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
        'Either': {
            'anyOf': [
                {
                    '$ref': '#/definitions/Left<T1>'
                },
                {
                    '$ref': '#/definitions/Right<T2>'
                }
            ]
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Implicit'
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
                        '$ref': '#/definitions/ITimeRate'
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
                        '$ref': '#/definitions/ITimeSize'
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Implicit'
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Implicit'
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
                        '$ref': '#/definitions/IOriginatedAddress'
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
                                        'TzAddress'
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
                'time': {
                    'type': 'string'
                }
            },
            'required': [
                'hash',
                'operationType',
                'size',
                'time'
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
        'IOriginatedAddress': {
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Originated'
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
                        '$ref': '#/definitions/ITimeSize'
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
                        '$ref': '#/definitions/ITimeRate'
                    },
                    'type': 'array'
                },
                'retrieved': {
                    'type': 'string'
                },
                'totalDelegationsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimeSize'
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
                    '$ref': '#/definitions/T_4'
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
        'IRpcClientException': {
            'properties': {
                'contents': {
                    'type': 'string'
                },
                'tag': {
                    'enum': [
                        'RpcClientException'
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
        'IRpcServerException': {
            'properties': {
                'tag': {
                    'enum': [
                        'RpcServerException'
                    ],
                    'type': 'string'
                }
            },
            'required': [
                'tag'
            ],
            'type': 'object'
        },
        'ITimeRate': {
            'properties': {
                'rate': {
                    'type': 'number'
                },
                'time': {
                    'type': 'string'
                }
            },
            'required': [
                'rate',
                'time'
            ],
            'type': 'object'
        },
        'ITimeSize': {
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
                'time': {
                    'type': 'string'
                }
            },
            'required': [
                'size',
                'time'
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
                        '$ref': '#/definitions/IOriginatedAddress'
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
                                        'TzAddress'
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
                'time': {
                    'type': 'string'
                }
            },
            'required': [
                'hash',
                'operationType',
                'size',
                'time'
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
        'Left': {
            'properties': {
                'Left': {
                    '$ref': '#/definitions/T_1'
                }
            },
            'required': [
                'Left'
            ],
            'type': 'object'
        },
        'Left<RpcException>': {
            'properties': {
                'Left': {
                    'anyOf': [
                        {
                            '$ref': '#/definitions/IRpcClientException'
                        },
                        {
                            '$ref': '#/definitions/IRpcServerException'
                        }
                    ]
                }
            },
            'required': [
                'Left'
            ],
            'type': 'object'
        },
        'Left<T1>': {
            'properties': {
                'Left': {
                    '$ref': '#/definitions/T1'
                }
            },
            'required': [
                'Left'
            ],
            'type': 'object'
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
        'OriginatedAddress': {
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
                                        'TzAddress'
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
                            'properties': {
                                'TagDoNotUse': {
                                    'enum': [
                                        'Originated'
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
                        '$ref': '#/definitions/ITimeSize'
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
                        '$ref': '#/definitions/ITimeRate'
                    },
                    'type': 'array'
                },
                'retrieved': {
                    'type': 'string'
                },
                'totalDelegationsOverTime': {
                    'items': {
                        '$ref': '#/definitions/ITimeSize'
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
        'Right': {
            'properties': {
                'Right': {
                    '$ref': '#/definitions/T_2'
                }
            },
            'required': [
                'Right'
            ],
            'type': 'object'
        },
        'Right<T2>': {
            'properties': {
                'Right': {
                    '$ref': '#/definitions/T2'
                }
            },
            'required': [
                'Right'
            ],
            'type': 'object'
        },
        'Right<T>': {
            'properties': {
                'Right': {
                    '$ref': '#/definitions/T'
                }
            },
            'required': [
                'Right'
            ],
            'type': 'object'
        },
        'RpcException': {
            'anyOf': [
                {
                    '$ref': '#/definitions/IRpcClientException'
                },
                {
                    '$ref': '#/definitions/IRpcServerException'
                }
            ]
        },
        'RpcResponse': {
            'anyOf': [
                {
                    '$ref': '#/definitions/Left<RpcException>'
                },
                {
                    '$ref': '#/definitions/Right<T>'
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
        'T1': {},
        'T2': {},
        'T_1': {},
        'T_2': {},
        'T_3': {},
        'T_4': {},
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
        'TimeRate': {
            'properties': {
                'rate': {
                    'type': 'number'
                },
                'time': {
                    'type': 'string'
                }
            },
            'required': [
                'rate',
                'time'
            ],
            'type': 'object'
        },
        'TimeSize': {
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
                'time': {
                    'type': 'string'
                }
            },
            'required': [
                'size',
                'time'
            ],
            'type': 'object'
        },
        'Unit': {
            'items': {
                '$ref': '#/definitions/Boolean'
            },
            'type': 'array'
        },
        'V552418': {
            'enum': [
                'Bridge Typings Version 552418'
            ],
            'type': 'string'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRlZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFrRWEsUUFBQSxPQUFPLEdBQUc7SUFDckIsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhLEVBQUU7UUFDYixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsR0FBRztnQkFDSCxHQUFHO2FBQ0o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsbUJBQW1CLEVBQUU7b0JBQ25CLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sS0FBSztxQ0FDTjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFdBQVc7cUNBQ1o7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixVQUFVO3FDQUNYO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELHVCQUF1QixFQUFFO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHlCQUF5QjtxQkFDbEM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLE1BQU0sRUFBRSxTQUFTO2lCQUNsQjtnQkFDRCxpQkFBaUIsRUFBRTtvQkFDakIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSx5QkFBeUI7cUJBQ2xDO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCxrQkFBa0IsRUFBRTtvQkFDbEIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsYUFBYTtnQkFDYixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sdUJBQXVCO2dCQUN2QixNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixrQkFBa0I7YUFDbkI7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLFlBQVksRUFBRTtnQkFDWixRQUFRLEVBQUU7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxzQkFBc0I7cUJBQy9CO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsUUFBUTtnQkFDUixXQUFXO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFNBQVMsRUFBRSxFQUFFO1FBQ2IsdUJBQXVCLEVBQUU7WUFDdkIsWUFBWSxFQUFFO2dCQUNaLEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEdBQUc7Z0JBQ0gsR0FBRzthQUNKO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCx3QkFBd0IsRUFBRTtZQUN4QixZQUFZLEVBQUU7Z0JBQ1osUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFFBQVE7YUFDVDtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0Qsa0JBQWtCLEVBQUU7WUFDbEIsWUFBWSxFQUFFO2dCQUNaLFVBQVUsRUFBRTtvQkFDVixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sV0FBVztxQ0FDWjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFVBQVU7cUNBQ1g7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxjQUFjLEVBQUU7WUFDZCxZQUFZLEVBQUU7Z0JBQ1osTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixXQUFXO3FDQUNaO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sVUFBVTtxQ0FDWDtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsTUFBTTtnQkFDTixNQUFNO2FBQ1A7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxNQUFNLEVBQUUsd0JBQXdCO2lCQUNqQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUseUJBQXlCO2lCQUNsQzthQUNGO1NBQ0Y7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsR0FBRztnQkFDSCxHQUFHO2FBQ0o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsbUJBQW1CLEVBQUU7b0JBQ25CLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxhQUFhLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sS0FBSztxQ0FDTjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFdBQVc7cUNBQ1o7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixVQUFVO3FDQUNYO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELHVCQUF1QixFQUFFO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHlCQUF5QjtxQkFDbEM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLE1BQU0sRUFBRSxTQUFTO2lCQUNsQjtnQkFDRCxpQkFBaUIsRUFBRTtvQkFDakIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSx5QkFBeUI7cUJBQ2xDO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCxrQkFBa0IsRUFBRTtvQkFDbEIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixNQUFNO2dCQUNOLG1CQUFtQjtnQkFDbkIsYUFBYTtnQkFDYixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sdUJBQXVCO2dCQUN2QixNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixrQkFBa0I7YUFDbkI7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLFlBQVksRUFBRTtnQkFDWixRQUFRLEVBQUU7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxzQkFBc0I7cUJBQy9CO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsUUFBUTtnQkFDUixXQUFXO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELHdCQUF3QixFQUFFO1lBQ3hCLFlBQVksRUFBRTtnQkFDWixHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixHQUFHO2dCQUNILEdBQUc7YUFDSjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QseUJBQXlCLEVBQUU7WUFDekIsWUFBWSxFQUFFO2dCQUNaLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixRQUFRO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELG1CQUFtQixFQUFFO1lBQ25CLFlBQVksRUFBRTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFdBQVc7cUNBQ1o7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixVQUFVO3FDQUNYO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELFVBQVUsRUFBRTtvQkFDVixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixVQUFVO2dCQUNWLFVBQVU7YUFDWDtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsWUFBWSxFQUFFO2dCQUNaLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sV0FBVztxQ0FDWjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFVBQVU7cUNBQ1g7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE1BQU07Z0JBQ04sTUFBTTthQUNQO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxlQUFlLEVBQUU7WUFDZixZQUFZLEVBQUU7Z0JBQ1osS0FBSyxFQUFFO29CQUNMLE1BQU0sRUFBRTt3QkFDTixjQUFjO3FCQUNmO29CQUNELE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUs7YUFDTjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUU7d0JBQ04sV0FBVztxQkFDWjtvQkFDRCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLO2FBQ047WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELG1CQUFtQixFQUFFO1lBQ25CLFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsa0NBQWtDO3FCQUMzQztvQkFDRCxNQUFNLEVBQUUsT0FBTztpQkFDaEI7Z0JBQ0QsV0FBVyxFQUFFO29CQUNYLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFNBQVM7Z0JBQ1QsWUFBWTtnQkFDWixXQUFXO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLFlBQVksRUFBRTtnQkFDWixXQUFXLEVBQUU7b0JBQ1gsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLGFBQWE7cUNBQ2Q7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixXQUFXO3FDQUNaO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04saUJBQWlCO3FDQUNsQjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLG1DQUFtQztpQkFDNUM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixLQUFLO3FDQUNOO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELE1BQU0sRUFBRTtvQkFDTixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixNQUFNO2dCQUNOLGVBQWU7Z0JBQ2YsTUFBTTtnQkFDTixNQUFNO2FBQ1A7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFlBQVksRUFBRTtnQkFDWixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFNBQVM7aUJBQ2xCO2dCQUNELFdBQVcsRUFBRTtvQkFDWCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sYUFBYTtxQ0FDZDtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsU0FBUztpQkFDbEI7Z0JBQ0QsV0FBVyxFQUFFO29CQUNYLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxXQUFXO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLE1BQU0sRUFBRSw2QkFBNkI7aUJBQ3RDO2dCQUNELE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sV0FBVztxQ0FDWjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFlBQVk7cUNBQ2I7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsZ0NBQWdDO3FCQUN6QztvQkFDRCxNQUFNLEVBQUUsT0FBTztpQkFDaEI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixTQUFTO2dCQUNULFVBQVU7Z0JBQ1YsTUFBTTtnQkFDTixRQUFRO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELG1CQUFtQixFQUFFO1lBQ25CLFlBQVksRUFBRTtnQkFDWixZQUFZLEVBQUU7b0JBQ1osTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHlCQUF5QjtxQkFDbEM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELHNCQUFzQixFQUFFO29CQUN0QixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLGlDQUFpQztxQkFDMUM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELHVCQUF1QixFQUFFO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHlCQUF5QjtxQkFDbEM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELFdBQVcsRUFBRTtvQkFDWCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsMEJBQTBCLEVBQUU7b0JBQzFCLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUseUJBQXlCO3FCQUNsQztvQkFDRCxNQUFNLEVBQUUsT0FBTztpQkFDaEI7Z0JBQ0QsY0FBYyxFQUFFO29CQUNkLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixLQUFLO3FDQUNOO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsWUFBWTtnQkFDWixlQUFlO2dCQUNmLHNCQUFzQjtnQkFDdEIsdUJBQXVCO2dCQUN2QixXQUFXO2dCQUNYLDBCQUEwQjtnQkFDMUIsY0FBYzthQUNmO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixZQUFZLEVBQUU7Z0JBQ1osU0FBUyxFQUFFO29CQUNULHNCQUFzQixFQUFFO3dCQUN0QixNQUFNLEVBQUUsUUFBUTtxQkFDakI7b0JBQ0QsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sV0FBVztxQ0FDWjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFNBQVM7cUNBQ1Y7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixPQUFPO3FDQUNSO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsU0FBUztnQkFDVCxJQUFJO2dCQUNKLFNBQVM7Z0JBQ1QsT0FBTzthQUNSO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixZQUFZLEVBQUU7Z0JBQ1osV0FBVyxFQUFFO29CQUNYLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixXQUFXO3FDQUNaO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sVUFBVTtxQ0FDWDtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFdBQVc7Z0JBQ1gsU0FBUzthQUNWO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxZQUFZLEVBQUU7Z0JBQ1osVUFBVSxFQUFFO29CQUNWLE1BQU0sRUFBRSxtQkFBbUI7aUJBQzVCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUU7d0JBQ04sUUFBUTtxQkFDVDtvQkFDRCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixVQUFVO2dCQUNWLEtBQUs7YUFDTjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osWUFBWSxFQUFFO2dCQUNaLFVBQVUsRUFBRTtvQkFDVixNQUFNLEVBQUUsbUJBQW1CO2lCQUM1QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFO3dCQUNOLFFBQVE7cUJBQ1Q7b0JBQ0QsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsVUFBVTtnQkFDVixLQUFLO2FBQ047WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLFlBQVksRUFBRTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUU7d0JBQ04sb0JBQW9CO3FCQUNyQjtvQkFDRCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixVQUFVO2dCQUNWLEtBQUs7YUFDTjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsWUFBWSxFQUFFO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUU7d0JBQ04sb0JBQW9CO3FCQUNyQjtvQkFDRCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixLQUFLO2FBQ047WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFdBQVcsRUFBRTtZQUNYLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixNQUFNO2dCQUNOLE1BQU07YUFDUDtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsWUFBWSxFQUFFO2dCQUNaLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sS0FBSztxQ0FDTjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsTUFBTTtnQkFDTixNQUFNO2FBQ1A7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLFlBQVksRUFBRTtnQkFDWixTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsa0NBQWtDO3FCQUMzQztvQkFDRCxNQUFNLEVBQUUsT0FBTztpQkFDaEI7Z0JBQ0QsV0FBVyxFQUFFO29CQUNYLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFNBQVM7Z0JBQ1QsWUFBWTtnQkFDWixXQUFXO2FBQ1o7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELEdBQUcsRUFBRSxFQUFFO1FBQ1AsaUJBQWlCLEVBQUU7WUFDakIsWUFBWSxFQUFFO2dCQUNaLFdBQVcsRUFBRTtvQkFDWCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sYUFBYTtxQ0FDZDtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFdBQVc7cUNBQ1o7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixpQkFBaUI7cUNBQ2xCO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELGVBQWUsRUFBRTtvQkFDZixNQUFNLEVBQUUsbUNBQW1DO2lCQUM1QztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE1BQU07Z0JBQ04sZUFBZTtnQkFDZixNQUFNO2dCQUNOLE1BQU07YUFDUDtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsTUFBTSxFQUFFO2dCQUNOLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUixZQUFZO2FBQ2I7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELE1BQU0sRUFBRTtZQUNOLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLG1CQUFtQjtpQkFDNUI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixNQUFNO2FBQ1A7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLE1BQU0sRUFBRSxtQ0FBbUM7eUJBQzVDO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxtQ0FBbUM7eUJBQzVDO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsTUFBTTthQUNQO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxVQUFVLEVBQUU7WUFDVixZQUFZLEVBQUU7Z0JBQ1osTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxrQkFBa0I7aUJBQzNCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsTUFBTTthQUNQO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixZQUFZLEVBQUU7Z0JBQ1osT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRSxTQUFTO2lCQUNsQjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1gsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLGFBQWE7cUNBQ2Q7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLFNBQVM7aUJBQ2xCO2dCQUNELFdBQVcsRUFBRTtvQkFDWCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsV0FBVzthQUNaO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixZQUFZLEVBQUU7Z0JBQ1osU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixLQUFLO3FDQUNOO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELFVBQVUsRUFBRTtvQkFDVixNQUFNLEVBQUUsNkJBQTZCO2lCQUN0QztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFdBQVc7cUNBQ1o7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixZQUFZO3FDQUNiO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELFFBQVEsRUFBRTtvQkFDUixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLGdDQUFnQztxQkFDekM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsU0FBUztnQkFDVCxVQUFVO2dCQUNWLE1BQU07Z0JBQ04sUUFBUTthQUNUO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixZQUFZLEVBQUU7Z0JBQ1osWUFBWSxFQUFFO29CQUNaLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSx5QkFBeUI7cUJBQ2xDO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCxzQkFBc0IsRUFBRTtvQkFDdEIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxpQ0FBaUM7cUJBQzFDO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCx1QkFBdUIsRUFBRTtvQkFDdkIsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSx5QkFBeUI7cUJBQ2xDO29CQUNELE1BQU0sRUFBRSxPQUFPO2lCQUNoQjtnQkFDRCxXQUFXLEVBQUU7b0JBQ1gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELDBCQUEwQixFQUFFO29CQUMxQixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLHlCQUF5QjtxQkFDbEM7b0JBQ0QsTUFBTSxFQUFFLE9BQU87aUJBQ2hCO2dCQUNELGNBQWMsRUFBRTtvQkFDZCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sS0FBSztxQ0FDTjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLHVCQUF1QjtnQkFDdkIsV0FBVztnQkFDWCwwQkFBMEI7Z0JBQzFCLGNBQWM7YUFDZjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsWUFBWSxFQUFFO2dCQUNaLFNBQVMsRUFBRTtvQkFDVCxzQkFBc0IsRUFBRTt3QkFDdEIsTUFBTSxFQUFFLFFBQVE7cUJBQ2pCO29CQUNELE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFdBQVc7cUNBQ1o7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixTQUFTO3FDQUNWO29DQUNELE1BQU0sRUFBRSxRQUFRO2lDQUNqQjs2QkFDRjs0QkFDRCxVQUFVLEVBQUU7Z0NBQ1YsYUFBYTs2QkFDZDs0QkFDRCxNQUFNLEVBQUUsUUFBUTt5QkFDakI7d0JBQ0Q7NEJBQ0UsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sT0FBTztxQ0FDUjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLFNBQVM7Z0JBQ1QsSUFBSTtnQkFDSixTQUFTO2dCQUNULE9BQU87YUFDUjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsWUFBWSxFQUFFO2dCQUNaLFdBQVcsRUFBRTtvQkFDWCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sV0FBVztxQ0FDWjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFO2dDQUNWLGFBQWE7NkJBQ2Q7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLFVBQVU7cUNBQ1g7b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELFVBQVUsRUFBRTtnQkFDVixXQUFXO2dCQUNYLFNBQVM7YUFDVjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWSxFQUFFO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsbUJBQW1CO2lCQUM1QjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU87YUFDUjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsWUFBWSxFQUFFO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsa0JBQWtCO2lCQUMzQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU87YUFDUjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsWUFBWSxFQUFFO2dCQUNaLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUUsaUJBQWlCO2lCQUMxQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU87YUFDUjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsT0FBTyxFQUFFO2dCQUNQO29CQUNFLE1BQU0sRUFBRSxtQ0FBbUM7aUJBQzVDO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxtQ0FBbUM7aUJBQzVDO2FBQ0Y7U0FDRjtRQUNELGFBQWEsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxNQUFNLEVBQUUsa0NBQWtDO2lCQUMzQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUsd0JBQXdCO2lCQUNqQzthQUNGO1NBQ0Y7UUFDRCxtQkFBbUIsRUFBRTtZQUNuQixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLDBCQUEwQjtpQkFDbkM7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLDZCQUE2QjtpQkFDdEM7YUFDRjtTQUNGO1FBQ0QsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsWUFBWSxFQUFFO3dCQUNaLGFBQWEsRUFBRTs0QkFDYixPQUFPLEVBQUU7Z0NBQ1AsTUFBTSxFQUFFLFFBQVE7NkJBQ2pCOzRCQUNELE1BQU0sRUFBRSxPQUFPO3lCQUNoQjtxQkFDRjtvQkFDRCxVQUFVLEVBQUU7d0JBQ1YsYUFBYTtxQkFDZDtvQkFDRCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0Q7b0JBQ0UsTUFBTSxFQUFFLGlCQUFpQjtpQkFDMUI7YUFDRjtTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFO2dCQUNQO29CQUNFLFlBQVksRUFBRTt3QkFDWixhQUFhLEVBQUU7NEJBQ2IsT0FBTyxFQUFFO2dDQUNQLE1BQU0sRUFBRSxRQUFROzZCQUNqQjs0QkFDRCxNQUFNLEVBQUUsT0FBTzt5QkFDaEI7cUJBQ0Y7b0JBQ0QsVUFBVSxFQUFFO3dCQUNWLGFBQWE7cUJBQ2Q7b0JBQ0QsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixZQUFZLEVBQUU7Z0JBQ1osTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsTUFBTTtnQkFDTixNQUFNO2FBQ1A7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLFlBQVksRUFBRTtnQkFDWixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFO3dCQUNQOzRCQUNFLFlBQVksRUFBRTtnQ0FDWixhQUFhLEVBQUU7b0NBQ2IsTUFBTSxFQUFFO3dDQUNOLEtBQUs7cUNBQ047b0NBQ0QsTUFBTSxFQUFFLFFBQVE7aUNBQ2pCOzZCQUNGOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixhQUFhOzZCQUNkOzRCQUNELE1BQU0sRUFBRSxRQUFRO3lCQUNqQjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsUUFBUTt5QkFDakI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE1BQU07Z0JBQ04sTUFBTTthQUNQO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLHVCQUF1QjthQUNoQztZQUNELE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFO2dCQUNOLCtCQUErQjthQUNoQztZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO0tBQ0Y7Q0FDRixDQUFBIn0=