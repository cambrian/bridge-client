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
        'V555894': {
            'enum': [
                'Bridge Typings Version 555894'
            ],
            'type': 'string'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dlbmVyYXRlZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF1Q2EsUUFBQSxPQUFPLEdBQUc7SUFDckIsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhLEVBQUU7UUFDYixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLFlBQVksRUFBRTtnQkFDWixHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsWUFBWSxFQUFFO2dCQUNaLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQO29CQUNFLE1BQU0sRUFBRSx3QkFBd0I7aUJBQ2pDO2dCQUNEO29CQUNFLE1BQU0sRUFBRSx5QkFBeUI7aUJBQ2xDO2FBQ0Y7U0FDRjtRQUNELFNBQVMsRUFBRTtZQUNULFlBQVksRUFBRTtnQkFDWixRQUFRLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLG1DQUFtQztpQkFDNUM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRTt3QkFDUDs0QkFDRSxZQUFZLEVBQUU7Z0NBQ1osYUFBYSxFQUFFO29DQUNiLE1BQU0sRUFBRTt3Q0FDTixXQUFXO3FDQUNaO29DQUNELE1BQU0sRUFBRSxRQUFR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