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
        'V580110': {
            'enum': [
                'Bridge Typings Version 580110'
            ],
            'type': 'string'
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRlZC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnQ2EsUUFBQSxPQUFPLEdBQUc7SUFDckIsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhLEVBQUU7UUFDYixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLFlBQVksRUFBRTtnQkFDWixHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0Qsd0JBQXdCLEVBQUU7WUFDeEIsWUFBWSxFQUFFO2dCQUNaLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsWUFBWSxFQUFFO2dCQUNaLEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCx3QkFBd0IsRUFBRTtZQUN4QixZQUFZLEVBQUU7Z0JBQ1osR0FBRyxFQUFFO29CQUNILE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxHQUFHLEVBQUU7b0JBQ0gsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNE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