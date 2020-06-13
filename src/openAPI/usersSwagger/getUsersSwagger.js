const HttpStatus = require('http-status-codes')

const getUsersSwagger = {
    tags: ['Users'],
    description: 'Resgata todos os usuários.',
    operationId: 'getUsersController',
    responses: {
        [HttpStatus.OK]: {
            description: 'OK',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
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
            }
        }
    }
}

module.exports = getUsersSwagger
