const createUsersSwagger = include('openAPI/usersSwagger/createUsersSwagger')
const deleteUsersSwagger = include('openAPI/usersSwagger/deleteUsersSwagger')
const getUserByIdSwagger = include('openAPI/usersSwagger/getUserByIdSwagger')
const getUsersSwagger = include('openAPI/usersSwagger/getUsersSwagger')
const patchUsersSwagger = include('openAPI/usersSwagger/patchUsersSwagger')

const createTasksSwagger = include('openAPI/tasksSwagger/createTasksSwagger')
const deleteTasksSwagger = include('openAPI/tasksSwagger/deleteTasksSwagger')
const getTaskByIdSwagger = include('openAPI/tasksSwagger/getTaskByIdSwagger')
const getTasksSwagger = include('openAPI/tasksSwagger/getTasksSwagger')
const patchTasksSwagger = include('openAPI/tasksSwagger/patchTasksSwagger')

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Node API',
        description: 'Simples CRUD de usuários e tarefas com MongoDB'
    },
    servers: [
        {
            'url': 'https://{host}',
            'variables': {
                host: {
                    enum: [
                        process.env.PRD_HOST_ENVIRONMENT,
                        process.env.STG_HOST_ENVIRONMENT
                    ],
                    default: process.env.STG_HOST_ENVIRONMENT
                }
            }
        }
    ],
    tags: [
        {
            name: 'Users'
        },
        {
            name: 'Tasks'
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
        },
        '/tasks': {
            'get': getTasksSwagger,
            'post': createTasksSwagger
        },
        '/tasks/{id}': {
            'get': getTaskByIdSwagger,
            'patch': patchTasksSwagger,
            'delete': deleteTasksSwagger
        }
    }
}

module.exports = swaggerDocument
