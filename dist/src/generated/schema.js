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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRlZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF1Q2EsUUFBQSxPQUFPLEdBQUc7SUFDckIsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhLEVBQUU7UUFDYixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLFlBQVksRUFBRTtnQkFDWixHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsWUFBWSxFQUFFO2dCQUNaLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0Qsc0JBQXNCLEVBQUU7WUFDdEIsaUJBQWlCLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxPQUFPLEVBQUU7NEJBQ1A7Z0NBQ0UsWUFBWSxFQUFFO29DQUNaLGFBQWEsRUFBRTt3Q0FDYixNQUFNLEVBQUU7NENBQ04sUUFBUTt5Q0FDVDt3Q0FDRCxNQUFNLEVBQUUsUUFBUTtxQ0FDakI7aUNBQ0Y7Z0NBQ0QsTUFBTSxFQUFFLFFBQVE7NkJBQ2pCOzRCQUNEO2dDQUNFLE1BQU0sRUFBRSxRQUFROzZCQUNqQjt5QkFDRjtxQkFDRjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsUUFBUTtxQkFDakI7aUJBQ0Y7YUFDRjtZQUNELE9BQU8s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