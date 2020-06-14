const HttpStatus = require('http-status-codes')

const patchTasksSwagger = {
    tags: ['Tasks'],
    description: 'Atualiza uma tarefa pelo Id.',
    operationId: 'patchTasksController',
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
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string'
                        },
                        completed: {
                            type: 'boolean'
                        },
                        description: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    },
    responses: {
        [HttpStatus.OK]: {
            description: 'OK',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string'
                            },
                            name: {
                                type: 'string'
                            },
                            completed: {
                                type: 'boolean'
                            },
                            description: {
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
                                example: 'Task not found on our system.'
                            }
                        }
                    }
                }
            }
        }
    }
}

module.exports = patchTasksSwagger
