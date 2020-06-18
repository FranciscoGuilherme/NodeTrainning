const HttpStatus = require('http-status-codes')

const patchTasksSwagger = {
    tags: ['Tasks'],
    summary: 'Atualiza uma tarefa pelo Id',
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
    parameters: [
        {
            in: 'body',
            name: 'body',
            description: 'Dados para uma nova tarefa',
            required: true,
            schema: {
                $ref: '#/components/schemas/Task'
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

module.exports = patchTasksSwagger
