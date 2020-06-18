const HttpStatus = require('http-status-codes')

const getUsersSwagger = {
    tags: ['Users'],
    summary: 'Resgata todos os usuários',
    description: 'Resgata todos os usuários.',
    operationId: 'getUsersController',
    responses: {
        [HttpStatus.OK]: {
            description: 'OK',
            schema: {
                type: 'array',
                items: {
                    $ref: '#/definitions/User'
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

module.exports = getUsersSwagger
