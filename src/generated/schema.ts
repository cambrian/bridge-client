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
  | 'V296236'
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
    'V296236': {
      'enum': [
        'Bridge Typings Version 296236'
      ],
      'type': 'string'
    }
  }
}
