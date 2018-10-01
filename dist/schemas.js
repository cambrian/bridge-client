"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlbWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBbUNhLFFBQUEsT0FBTyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSx5Q0FBeUM7SUFDcEQsYUFBYSxFQUFFO1FBQ2Isc0JBQXNCLEVBQUU7WUFDdEIsWUFBWSxFQUFFO2dCQUNaLEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFNBQVM7aUJBQ2xCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxNQUFNLEVBQUUsd0JBQXdCO2lCQUNqQztnQkFDRDtvQkFDRSxNQUFNLEVBQUUseUJBQXlCO2lCQUNsQzthQUNGO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxZQUFZLEVBQUU7Z0JBQ1osUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRSxtQ0FBbUM7aUJBQzVDO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsWUFBWSxFQUFFO2dDQUNaLGFBQWEsRUFBRTtvQ0FDYixNQUFNLEVBQUU7d0NBQ04sV0FBVztxQ0FDWjtvQ0FDRCxNQUFNLEVBQUUsUUFBUTtpQ0FDakI7NkJBQ0Y7NEJBQ0QsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxRQUFRO3lCQUNqQjtxQkFDRjtpQkFDRjthQUNGO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCx1QkFBdUIsRUFBRTtZQUN2QixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFF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