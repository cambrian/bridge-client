export type SchemaRef = 'AddIntsRequest'
  | 'Baker'
  | 'BakersResponse'
  | 'Boolean'
  | 'ConcatTextAuthRequest'
  | 'ConcatTextAuthResponse'
  | 'DelegateFraction'
  | 'DelegateInfo'
  | 'Either'
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
  | 'IOriginatedAddress'
  | 'IOverviewResponse'
  | 'IRequestMessage'
  | 'IResponseMessage'
  | 'IResult'
  | 'IResult<T>'
  | 'IRpcClientException'
  | 'IRpcServerException'
  | 'ITimeRate'
  | 'ITimeSize'
  | 'ImplicitResponse'
  | 'K'
  | 'LedgerOperation'
  | 'LedgerOperationType'
  | 'Left'
  | 'Left<RpcException>'
  | 'Left<T1>'
  | 'OperationResponse'
  | 'OriginatedAddress'
  | 'OverviewResponse'
  | 'RequestMessage'
  | 'ResponseMessage'
  | 'Right'
  | 'Right<T2>'
  | 'Right<T>'
  | 'RpcException'
  | 'RpcResponse'
  | 'StreamingResponse'
  | 'T'
  | 'T1'
  | 'T2'
  | 'T_1'
  | 'T_2'
  | 'T_3'
  | 'T_4'
  | 'Tagged'
  | 'Text'
  | 'TimeRate'
  | 'TimeSize'
  | 'Unit'
  | 'V552418'
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
}
