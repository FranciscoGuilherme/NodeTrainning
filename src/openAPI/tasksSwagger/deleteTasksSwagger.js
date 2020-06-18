const HttpStatus = require('http-status-codes')

const deleteTasksSwagger = {
    tags: ['Tasks'],
    summary: 'Deleta uma tarefa pelo Id',
    description: 'Deleta uma tarefa pelo Id.',
    operationId: 'deleteTasksController',
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
            schema: {
                $ref: '#/definitions/Task'
            }
        },
        [HttpStatus.NOT_FOUND]: {
            description: 'Not Found',
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
    },
    security: [
        {
            api_key: []
        }
    ]
}

module.exports = deleteTasksSwagger
