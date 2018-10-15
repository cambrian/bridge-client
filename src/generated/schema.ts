export type SchemaRef = 'AddIntsRequest'
  | 'ConcatTextAuthRequest'
  | 'ConcatTextAuthResponse'
  | 'DeserializeException'
  | 'Either'
  | 'IAddIntsRequest'
  | 'IBadAuth'
  | 'IBadCall'
  | 'IConcatTextAuthRequest'
  | 'IConcatTextAuthResponse'
  | 'IDeserializeException'
  | 'IEndOfResults'
  | 'IHeartbeat'
  | 'IRequestMessage'
  | 'IResponseMessage'
  | 'IResult'
  | 'IResult<T>'
  | 'K'
  | 'Left'
  | 'Left<T1>'
  | 'RequestMessage'
  | 'ResponseMessage'
  | 'Right'
  | 'Right<T2>'
  | 'RpcClientException'
  | 'StreamingResponse'
  | 'T'
  | 'T1'
  | 'T2'
  | 'T_1'
  | 'T_2'
  | 'T_3'
  | 'Tagged'
  | 'Text'
  | 'V173930'
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
    'DeserializeException': {
      'additionalItems': {
        'anyOf': [
          {
            'anyOf': [
              {
                'properties': {
                  'TagDoNotUse': {
                    'enum': [
                      'Format'
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
          {
            'type': 'string'
          }
        ]
      },
      'items': [
        {
          'anyOf': [
            {
              'properties': {
                'TagDoNotUse': {
                  'enum': [
                    'Format'
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
        {
          'type': 'string'
        }
      ],
      'minItems': 2,
      'type': 'array'
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
      'type': 'object'
    },
    'IBadAuth': {
      'properties': {
        'tag': {
          'enum': [
            'BadAuth'
          ],
          'type': 'string'
        }
      },
      'type': 'object'
    },
    'IBadCall': {
      'properties': {
        'contents': {
          'additionalItems': {
            'anyOf': [
              {
                'anyOf': [
                  {
                    'properties': {
                      'TagDoNotUse': {
                        'enum': [
                          'Format'
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
              {
                'type': 'string'
              }
            ]
          },
          'items': [
            {
              'anyOf': [
                {
                  'properties': {
                    'TagDoNotUse': {
                      'enum': [
                        'Format'
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
            {
              'type': 'string'
            }
          ],
          'minItems': 2,
          'type': 'array'
        },
        'tag': {
          'enum': [
            'BadCall'
          ],
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
    'IDeserializeException': {
      'additionalItems': {
        'anyOf': [
          {
            'anyOf': [
              {
                'properties': {
                  'TagDoNotUse': {
                    'enum': [
                      'Format'
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
          {
            'type': 'string'
          }
        ]
      },
      'items': [
        {
          'anyOf': [
            {
              'properties': {
                'TagDoNotUse': {
                  'enum': [
                    'Format'
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
        {
          'type': 'string'
        }
      ],
      'minItems': 2,
      'type': 'array'
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
    'K': {},
    'Left': {
      'properties': {
        'Left': {
          '$ref': '#/definitions/T'
        }
      },
      'type': 'object'
    },
    'Left<T1>': {
      'properties': {
        'Left': {
          '$ref': '#/definitions/T1'
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
    'Right': {
      'properties': {
        'Right': {
          '$ref': '#/definitions/T_1'
        }
      },
      'type': 'object'
    },
    'Right<T2>': {
      'properties': {
        'Right': {
          '$ref': '#/definitions/T2'
        }
      },
      'type': 'object'
    },
    'RpcClientException': {
      'anyOf': [
        {
          '$ref': '#/definitions/IBadAuth'
        },
        {
          '$ref': '#/definitions/IBadCall'
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
    'V173930': {
      'enum': [
        'Bridge Typings Version 173930'
      ],
      'type': 'string'
    }
  }
}
