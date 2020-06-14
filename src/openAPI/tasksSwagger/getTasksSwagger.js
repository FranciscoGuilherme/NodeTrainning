const HttpStatus = require('http-status-codes')

const getTasksSwagger = {
    tags: ['Tasks'],
    description: 'Resgata todos as tarefas.',
    operationId: 'getTasksController',
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
}

module.exports = getTasksSwagger
