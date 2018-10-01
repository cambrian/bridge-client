export type SchemaRefs = 'AddIntsSignedRequest'
  |'Either'
  |'Headers'
  |'IAddIntsSignedRequest'
  |'IBadAuth'
  |'IBadCall'
  |'IEndOfResults'
  |'IHeaders'
  |'IRequestMessage'
  |'IResponseMessage'
  |'IResult'
  |'IResult<T>'
  |'K'
  |'Left'
  |'Left<T1>'
  |'RequestMessage'
  |'ResponseMessage'
  |'ResultItem'
  |'Right'
  |'Right<T2>'
  |'RpcClientException'
  |'SerializationFormat'
  |'T'
  |'T1'
  |'T2'
  |'T_1'
  |'T_2'
  |'T_3'
  |'Tagged'
  |'Text'
  |'V215401'
export const Schemas = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  'definitions': {
    'AddIntsSignedRequest': {
      'properties': {
        'a': {
          'type': 'number'
        },
        'b': {
          'type': 'number'
        },
        'sign': {
          'type': 'boolean'
        }
      },
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
    'Headers': {
      'properties': {
        'format': {
          '$ref': '#/definitions/SerializationFormat'
        },
        'token': {
          'anyOf': [
            {
              'properties': {
                'TagDoNotUse': {
                  'enum': [
                    'AuthToken'
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
    'IAddIntsSignedRequest': {
      'properties': {
        'a': {
          'type': 'number'
        },
        'b': {
          'type': 'number'
        },
        'sign': {
          'type': 'boolean'
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
                'enum': [
                  'Haskell',
                  'JSON'
                ],
                'type': 'string'
              },
              {
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
              }
            ]
          },
          'items': [
            {
              'enum': [
                'Haskell',
                'JSON'
              ],
              'type': 'string'
            },
            {
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
    'IHeaders': {
      'properties': {
        'format': {
          '$ref': '#/definitions/SerializationFormat'
        },
        'token': {
          'anyOf': [
            {
              'properties': {
                'TagDoNotUse': {
                  'enum': [
                    'AuthToken'
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
    'IRequestMessage': {
      'properties': {
        'headers': {
          '$ref': '#/definitions/IHeaders'
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
    'K': {
      'type': 'object'
    },
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
          '$ref': '#/definitions/IHeaders'
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
    'ResultItem': {
      'anyOf': [
        {
          '$ref': '#/definitions/IResult<T>'
        },
        {
          '$ref': '#/definitions/IEndOfResults'
        }
      ]
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
    'SerializationFormat': {
      'enum': [
        'Haskell',
        'JSON'
      ],
      'type': 'string'
    },
    'T': {
      'type': 'object'
    },
    'T1': {
      'type': 'object'
    },
    'T2': {
      'type': 'object'
    },
    'T_1': {
      'type': 'object'
    },
    'T_2': {
      'type': 'object'
    },
    'T_3': {
      'type': 'object'
    },
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
    'V215401': {
      'enum': [
        'Bridge Typings Version 215401'
      ],
      'type': 'string'
    }
  }
}
