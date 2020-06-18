const HttpStatus = require('http-status-codes')

const createUsersSwagger = {
    tags: ['Users'],
    summary: 'Cria um usuário',
    description: 'Cria um usuário.',
    operationId: 'createUsersController',
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'Dados para um novo usuário',
            required: true,
            schema: {
                $ref: '#/components/schemas/Request'
            }
        }
    ],
    responses: {
        [HttpStatus.CREATED]: {
            description: 'Created',
            schema: {
                $ref: '#/definitions/User'
            }
        },
        [HttpStatus.BAD_REQUEST]: {
            description: 'Bad Request',
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
    },
    security: [
        {
            api_key: []
        }
    ]
}

module.exports = createUsersSwagger
