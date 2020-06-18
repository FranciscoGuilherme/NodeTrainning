const router = include('openAPI/swaggerRouter')

const swaggerDocument = {
    swagger: '2.0',
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
            name: 'Users',
            description: 'Simples CRUD de usuários',
        },
        {
            name: 'Tasks',
            description: 'Simples CRUD de tarefas',
        }
    ],
    paths: {
        '/users': {
            'get': router.users.getUsersSwagger,
            'post': router.users.createUsersSwagger
        },
        '/users/{id}': {
            'get': router.users.getUserByIdSwagger,
            'patch': router.users.patchUsersSwagger,
            'delete': router.users.deleteUsersSwagger
        },
        '/tasks': {
            'get': router.tasks.getTasksSwagger,
            'post': router.tasks.createTasksSwagger
        },
        '/tasks/{id}': {
            'get': router.tasks.getTaskByIdSwagger,
            'patch': router.tasks.patchTasksSwagger,
            'delete': router.tasks.deleteTasksSwagger
        }
    },
    securityDefinitions: {
        api_key: {
            type: 'apiKey',
            name: 'Token',
            in: 'header'
        }
    },
    definitions: {
        User: {
            type: 'object',
            properties: {
                _id: {
                    type: 'integer',
                    readOnly: true
                },
                age: {
                    type: 'integer'
                },
                name: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                },
                __v: {
                    type: 'integer'
                }
            },
            required: [
                'name',
                'email',
                'password'
            ]
        },
        Task: {
            type: 'object',
            properties: {
                _id: {
                    type: 'integer',
                    readOnly: true
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
            },
            required: [
                'name',
                'completed'
            ]
        }
    },
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    age: {
                        type: 'integer'
                    },
                    name: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    }
                },
                required: [
                    'name',
                    'email',
                    'password'
                ]
            },
            Task: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    completed: {
                        type: 'boolean'
                    },
                    description: {
                        type: 'string'
                    }
                },
                required: [
                    'name',
                    'completed'
                ]
            }
        }
    }
}

module.exports = swaggerDocument
