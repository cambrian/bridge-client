export declare type SchemaRef = 'AddIntsRequest' | 'ConcatTextAuthRequest' | 'ConcatTextAuthResponse' | 'IAddIntsRequest' | 'IConcatTextAuthRequest' | 'IConcatTextAuthResponse' | 'IEndOfResults' | 'IHeartbeat' | 'IRequestMessage' | 'IResponseMessage' | 'IResult' | 'IResult<T>' | 'IRpcResponse' | 'IRpcResponse<T>' | 'IRpcResponseClientException' | 'IRpcResponseServerException' | 'K' | 'RequestMessage' | 'ResponseMessage' | 'RpcResponse' | 'StreamingResponse' | 'T' | 'T_1' | 'T_2' | 'T_3' | 'Tagged' | 'Text' | 'V564424' | 'string' | 'number' | 'boolean' | 'symbol';
export declare const Schemas: {
    '$schema': string;
    'definitions': {
        'AddIntsRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'ConcatTextAuthRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'ConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IAddIntsRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IConcatTextAuthRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IConcatTextAuthResponse': {
            'properties': {
                'result': {
                    'type': string;
                };
            };
            'type': string;
        };
        'IEndOfResults': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IHeartbeat': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRequestMessage': {
            'properties': {
                'headers': {
                    'additionalProperties': {
                        'type': string;
                    };
                    'type': string;
                };
                'id': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'reqText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'route': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'IResponseMessage': {
            'properties': {
                'requestId': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'resText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'IResult': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IResult<T>': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponse': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponse<T>': {
            'properties': {
                'contents': {
                    '$ref': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponseClientException': {
            'properties': {
                'contents': {
                    'type': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IRpcResponseServerException': {
            'properties': {
                'contents': {
                    'type': string;
                };
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'K': {};
        'RequestMessage': {
            'properties': {
                'headers': {
                    'additionalProperties': {
                        'type': string;
                    };
                    'type': string;
                };
                'id': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'reqText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'route': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'ResponseMessage': {
            'properties': {
                'requestId': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
                'resText': {
                    'anyOf': ({
                        'properties': {
                            'TagDoNotUse': {
                                'enum': string[];
                                'type': string;
                            };
                        };
                        'type': string;
                    } | {
                        'type': string;
                        'properties'?: undefined;
                    })[];
                };
            };
            'type': string;
        };
        'RpcResponse': {
            'anyOf': {
                '$ref': string;
            }[];
        };
        'StreamingResponse': {
            'anyOf': {
                '$ref': string;
            }[];
        };
        'T': {};
        'T_1': {};
        'T_2': {};
        'T_3': {};
        'Tagged': {
            'anyOf': ({
                'properties': {
                    'TagDoNotUse': {
                        'items': {
                            'type': string;
                        };
                        'type': string;
                    };
                };
                'type': string;
                '$ref'?: undefined;
            } | {
                '$ref': string;
                'properties'?: undefined;
                'type'?: undefined;
            })[];
        };
        'Text': {
            'anyOf': ({
                'properties': {
                    'TagDoNotUse': {
                        'items': {
                            'type': string;
                        };
                        'type': string;
                    };
                };
                'type': string;
            } | {
                'type': string;
                'properties'?: undefined;
            })[];
        };
        'V564424': {
            'enum': string[];
            'type': string;
        };
    };
};
