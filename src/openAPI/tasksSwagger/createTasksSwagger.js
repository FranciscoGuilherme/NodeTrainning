const HttpStatus = require('http-status-codes')

const createTasksSwagger = {
    tags: ['Tasks'],
    description: 'Cria uma tarefa.',
    operationId: 'createTasksController',
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
        [HttpStatus.CREATED]: {
            description: 'Created',
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
        }
    }
}

module.exports = createTasksSwagger
