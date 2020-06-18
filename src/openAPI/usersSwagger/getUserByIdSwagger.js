const HttpStatus = require('http-status-codes')

const getUserByIdSwagger = {
    tags: ['Users'],
    summary: 'Resgata um usuário pelo id',
    description: 'Resgata um usuário pelo Id.',
    operationId: 'getUserByIdController',
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
    responses: {
        [HttpStatus.OK]: {
            description: 'OK',
            schema: {
                $ref: '#/definitions/User'
            }
        },
        [HttpStatus.NOT_FOUND]: {
            description: 'Not Found',
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'User not found on our system.'
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

module.exports = getUserByIdSwagger
