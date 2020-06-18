const HttpStatus = require('http-status-codes')

const patchUsersSwagger = {
    tags: ['Users'],
    summary: 'Atualiza um usuário',
    description: 'Atualiza um usuário pelo Id.',
    operationId: 'patchUsersController',
    parameters: [
        {
            name: 'id',
            in: 'path',
            required: true,
            description: 'O Id do usuário',
            schema: {
                type: 'string'
            }
        },
        {
            in: 'body',
            name: 'body',
            description: 'Dados para atualizar um usuário',
            required: true,
            schema: {
                $ref: '#/components/schemas/Request'
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

module.exports = patchUsersSwagger
