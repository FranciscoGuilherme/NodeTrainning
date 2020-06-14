const HttpStatus = require('http-status-codes')

const getTaskByIdSwagger = {
    tags: ['Tasks'],
    description: 'Resgata uma tarefa pelo Id.',
    operationId: 'getTaskByIdController',
    parameters: [
        {
            name: 'id',
            in: 'path',
            required: true,
            description: 'O Id da tarefa.',
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

module.exports = getTaskByIdSwagger
