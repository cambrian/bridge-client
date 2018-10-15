export declare type SchemaRef = 'AddIntsRequest' | 'ConcatTextAuthRequest' | 'ConcatTextAuthResponse' | 'DeserializeException' | 'Either' | 'IAddIntsRequest' | 'IBadAuth' | 'IBadCall' | 'IConcatTextAuthRequest' | 'IConcatTextAuthResponse' | 'IDeserializeException' | 'IEndOfResults' | 'IHeartbeat' | 'IRequestMessage' | 'IResponseMessage' | 'IResult' | 'IResult<T>' | 'K' | 'Left' | 'Left<T1>' | 'RequestMessage' | 'ResponseMessage' | 'Right' | 'Right<T2>' | 'RpcClientException' | 'StreamingResponse' | 'T' | 'T1' | 'T2' | 'T_1' | 'T_2' | 'T_3' | 'Tagged' | 'Text' | 'V173930' | 'string' | 'number' | 'boolean' | 'symbol';
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
        'DeserializeException': {
            'additionalItems': {
                'anyOf': ({
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
                    'type'?: undefined;
                } | {
                    'type': string;
                    'anyOf'?: undefined;
                })[];
            };
            'items': ({
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
                'type'?: undefined;
            } | {
                'type': string;
                'anyOf'?: undefined;
            })[];
            'minItems': number;
            'type': string;
        };
        'Either': {
            'anyOf': {
                '$ref': string;
            }[];
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
        'IBadAuth': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IBadCall': {
            'properties': {
                'contents': {
                    'additionalItems': {
                        'anyOf': ({
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
                            'type'?: undefined;
                        } | {
                            'type': string;
                            'anyOf'?: undefined;
                        })[];
                    };
                    'items': ({
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
                        'type'?: undefined;
                    } | {
                        'type': string;
                        'anyOf'?: undefined;
                    })[];
                    'minItems': number;
                    'type': string;
                };
                'tag': {
                    'enum': string[];
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
        'IDeserializeException': {
            'additionalItems': {
                'anyOf': ({
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
                    'type'?: undefined;
                } | {
                    'type': string;
                    'anyOf'?: undefined;
                })[];
            };
            'items': ({
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
                'type'?: undefined;
            } | {
                'type': string;
                'anyOf'?: undefined;
            })[];
            'minItems': number;
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
        'K': {};
        'Left': {
            'properties': {
                'Left': {
                    '$ref': string;
                };
            };
            'type': string;
        };
        'Left<T1>': {
            'properties': {
                'Left': {
                    '$ref': string;
                };
            };
            'type': string;
        };
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
        'Right': {
            'properties': {
                'Right': {
                    '$ref': string;
                };
            };
            'type': string;
        };
        'Right<T2>': {
            'properties': {
                'Right': {
                    '$ref': string;
                };
            };
            'type': string;
        };
        'RpcClientException': {
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
        'T1': {};
        'T2': {};
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
        'V173930': {
            'enum': string[];
            'type': string;
        };
    };
};
