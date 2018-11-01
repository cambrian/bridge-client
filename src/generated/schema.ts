export type SchemaRef = 'AddIntsRequest'
  | 'Boolean'
  | 'ConcatTextAuthRequest'
  | 'ConcatTextAuthResponse'
  | 'IAddIntsRequest'
  | 'IConcatTextAuthRequest'
  | 'IConcatTextAuthResponse'
  | 'IEndOfResults'
  | 'IHeartbeat'
  | 'IRequestMessage'
  | 'IResponseMessage'
  | 'IResult'
  | 'IResult<T>'
  | 'IRpcResponse'
  | 'IRpcResponse<T>'
  | 'IRpcResponseClientException'
  | 'IRpcResponseServerException'
  | 'K'
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
  | 'Unit'
  | 'V191895'
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
    'K': {},
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
    'Unit': {
      'items': {
        '$ref': '#/definitions/Boolean'
      },
      'type': 'array'
    },
    'V191895': {
      'enum': [
        'Bridge Typings Version 191895'
      ],
      'type': 'string'
    }
  }
}
