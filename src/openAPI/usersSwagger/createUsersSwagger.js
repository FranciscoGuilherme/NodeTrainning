const HttpStatus = require('http-status-codes')

const createUsersSwagger = {
    tags: ['Users'],
    description: 'Cria um usuário.',
    operationId: 'createUsersController',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string'
                        },
                        email: {
                            type: 'string'
                        },
                        password: {
                            type: 'string'
                        },
                        age: {
                            type: 'integer'
                        }
                    }
                }
            }
        }
    },
    responses: {
        [HttpStatus.CREATED]: {
            description: 'Created',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            age: {
                                type: 'integer'
                            },
                            _id: {
                                type: 'string'
                            },
                            name: {
                                type: 'string'
                            },
                            email: {
                                type: 'string'
                            },
                            password: {
                                type: 'string'
                            },
                            __v: {
                                type: 'integer'
                            }
                        }
                    }
                }
            }
        },
        [HttpStatus.BAD_REQUEST]: {
            description: 'Bad Request',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'object',
                                properties: {
                                    errors: {
                                        type: 'object',
                                        properties: {
                                            email: {
                                                type: 'object',
                                                properties: {
                                                    properties: {
                                                        type: 'object',
                                                        properties: {
                                                            message: {
                                                                type: 'string',
                                                                example: 'E-mail invalido'
                                                            },
                                                            type: {
                                                                type: 'string',
                                                                example: 'user defined'
                                                            },
                                                            path: {
                                                                type: 'string',
                                                                example: 'email'
                                                            },
                                                            value: {
                                                                type: 'string',
                                                                example: 'string'
                                                            },
                                                            reason: {
                                                                type: 'object'
                                                            },
                                                        }
                                                    },
                                                    kind: {
                                                        type: 'string',
                                                        example: 'user defined'
                                                    },
                                                    path: {
                                                        type: 'string',
                                                        example: 'email'
                                                    },
                                                    value: {
                                                        type: 'string',
                                                        example: 'string'
                                                    },
                                                    reason: {
                                                        type: 'object'
                                                    },
                                                }
                                            },
                                            password: {
                                                type: 'object',
                                                properties: {
                                                    properties: {
                                                        type: 'object',
                                                        properties: {
                                                            message: {
                                                                type: 'string',
                                                                example: 'Path `password` (`string`) is shorter than the minimum allowed length (7).'
                                                            },
                                                            type: {
                                                                type: 'string',
                                                                example: 'minlength'
                                                            },
                                                            minlength: {
                                                                type: 'integer',
                                                                example: 7
                                                            },
                                                            path: {
                                                                type: 'string',
                                                                example: 'password'
                                                            },
                                                            value: {
                                                                type: 'string',
                                                                example: 'string'
                                                            },
                                                        }
                                                    },
                                                    kind: {
                                                        type: 'string',
                                                        example: 'user defined'
                                                    },
                                                    path: {
                                                        type: 'string',
                                                        example: 'email'
                                                    },
                                                    value: {
                                                        type: 'string',
                                                        example: 'string'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    _message: {
                                        type: 'string',
                                        example: 'User validation failed'
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'User validation failed: email: E-mail invalido, password: Path `password` (`string`) is shorter than the minimum allowed length (7).'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = createUsersSwagger
