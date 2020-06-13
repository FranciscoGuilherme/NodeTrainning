const createUsersSwagger = include('openAPI/usersSwagger/createUsersSwagger')
const deleteUsersSwagger = include('openAPI/usersSwagger/deleteUsersSwagger')
const getUserByIdSwagger = include('openAPI/usersSwagger/getUserByIdSwagger')
const getUsersSwagger = include('openAPI/usersSwagger/getUsersSwagger')
const patchUsersSwagger = include('openAPI/usersSwagger/patchUsersSwagger')

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Node API',
        description: 'Simples CRUD de usuários e tarefas com MongoDB'
    },
    servers: [
        {
            'url': 'https://nice-node-api.herokuapp.com',
            'description': 'Ambiente de homologação'
        }
    ],
    tags: [
        {
            name: 'Users'
        }
    ],
    paths: {
        '/users': {
            'get': getUsersSwagger,
            'post': createUsersSwagger
        },
        '/users/{id}': {
            'get': getUserByIdSwagger,
            'patch': patchUsersSwagger,
            'delete': deleteUsersSwagger
        }
    }
}

module.exports = swaggerDocument
