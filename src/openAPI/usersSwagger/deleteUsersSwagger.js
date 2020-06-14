const HttpStatus = require('http-status-codes')

const deleteUsersSwagger = {
    tags: ['Users'],
    description: 'Deleta um usuário pelo Id.',
    operationId: 'deleteUsersController',
    parameters: [
        {
            name: 'id',
            in: 'path',
            required: true,
            description: 'O Id do usuário',
            schema: {
                type: 'string'
            }
        }
    ],
    responses: {
        [HttpStatus.OK]: {
            description: 'OK',
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
        [HttpStatus.NOT_FOUND]: {
            description: 'Not Found',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'User not found on our system.'
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = deleteUsersSwagger
