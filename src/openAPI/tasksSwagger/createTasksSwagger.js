const HttpStatus = require('http-status-codes')

const createTasksSwagger = {
    tags: ['Tasks'],
    summary: 'Cria uma tarefa',
    description: 'Cria uma tarefa.',
    operationId: 'createTasksController',
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
        [HttpStatus.CREATED]: {
            description: 'Created',
            schema: {
                $ref: '#/definitions/Task'
            }
        }
    },
    security: [
        {
            api_key: []
        }
    ]
}

module.exports = createTasksSwagger
