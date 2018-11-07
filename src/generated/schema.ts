export type SchemaRef = 'AddIntsRequest'
  | 'Baker'
  | 'BakersResponse'
  | 'Boolean'
  | 'ConcatTextAuthRequest'
  | 'ConcatTextAuthResponse'
  | 'DelegateFraction'
  | 'DelegateInfo'
  | 'IAddIntsRequest'
  | 'IBaker'
  | 'IBakersResponse'
  | 'IConcatTextAuthRequest'
  | 'IConcatTextAuthResponse'
  | 'IDelegateFraction'
  | 'IDelegateInfo'
  | 'IEndOfResults'
  | 'IHeartbeat'
  | 'IImplicitResponse'
  | 'ILedgerOperation'
  | 'IOperationResponse'
  | 'IOriginatedAccount'
  | 'IOverviewResponse'
  | 'IRequestMessage'
  | 'IResponseMessage'
  | 'IResult'
  | 'IResult<T>'
  | 'IRpcResponse'
  | 'IRpcResponse<T>'
  | 'IRpcResponseClientException'
  | 'IRpcResponseServerException'
  | 'ITimestampRate'
  | 'ITimestampSize'
  | 'ImplicitResponse'
  | 'K'
  | 'LedgerOperation'
  | 'LedgerOperationType'
  | 'OperationResponse'
  | 'OriginatedAccount'
  | 'OverviewResponse'
  | 'RequestMessage'
  | 'ResponseMessage'
  | 'RpcResponse'
  | 'StreamingResponse'
  | 'T'
  | 'T_1'
  | 'T_2'
  | 'T_3'
  | 'Tagged'
  | 'Text'
  | 'TimestampRate'
  | 'TimestampSize'
  | 'Unit'
  | 'V705328'
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
export const Schemas = {
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
}
