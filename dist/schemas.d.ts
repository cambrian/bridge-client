export declare type SchemaRefs = 'AddIntsSignedRequest' | 'Either' | 'Headers' | 'IAddIntsSignedRequest' | 'IBadAuth' | 'IBadCall' | 'IEndOfResults' | 'IHeaders' | 'IRequestMessage' | 'IResponseMessage' | 'IResult' | 'IResult<T>' | 'K' | 'Left' | 'Left<T1>' | 'RequestMessage' | 'ResponseMessage' | 'ResultItem' | 'Right' | 'Right<T2>' | 'RpcClientException' | 'SerializationFormat' | 'T' | 'T1' | 'T2' | 'T_1' | 'T_2' | 'T_3' | 'Tagged' | 'Text' | 'V215401' | 'string' | 'number' | 'boolean' | 'symbol';
export declare const Schemas: {
    '$schema': string;
    'definitions': {
        'AddIntsSignedRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
                'sign': {
                    'type': string;
                };
            };
            'type': string;
        };
        'Either': {
            'anyOf': {
                '$ref': string;
            }[];
        };
        'Headers': {
            'properties': {
                'format': {
                    '$ref': string;
                };
                'token': {
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
        'IAddIntsSignedRequest': {
            'properties': {
                'a': {
                    'type': string;
                };
                'b': {
                    'type': string;
                };
                'sign': {
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
                            'enum': string[];
                            'type': string;
                            'anyOf'?: undefined;
                        } | {
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
                            'enum'?: undefined;
                            'type'?: undefined;
                        })[];
                    };
                    'items': ({
                        'enum': string[];
                        'type': string;
                        'anyOf'?: undefined;
                    } | {
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
                        'enum'?: undefined;
                        'type'?: undefined;
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
        'IEndOfResults': {
            'properties': {
                'tag': {
                    'enum': string[];
                    'type': string;
                };
            };
            'type': string;
        };
        'IHeaders': {
            'properties': {
                'format': {
                    '$ref': string;
                };
                'token': {
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
        'IRequestMessage': {
            'properties': {
                'headers': {
                    '$ref': string;
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
        'K': {
            'type': string;
        };
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
                    '$ref': string;
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
        'ResultItem': {
            'anyOf': {
                '$ref': string;
            }[];
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
        'SerializationFormat': {
            'enum': string[];
            'type': string;
        };
        'T': {
            'type': string;
        };
        'T1': {
            'type': string;
        };
        'T2': {
            'type': string;
        };
        'T_1': {
            'type': string;
        };
        'T_2': {
            'type': string;
        };
        'T_3': {
            'type': string;
        };
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
        'V215401': {
            'enum': string[];
            'type': string;
        };
    };
};
