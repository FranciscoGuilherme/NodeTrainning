const HttpStatus = require('http-status-codes')

const getTasksSwagger = {
    tags: ['Tasks'],
    summary: 'Resgata todos as tarefas',
    description: 'Resgata todos as tarefas.',
    operationId: 'getTasksController',
    responses: {
        [HttpStatus.OK]: {
            description: 'OK',
            schema: {
                type: 'array',
                items: {
                    $ref: '#/definitions/Task'
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

module.exports = getTasksSwagger
