const users = {
    createUsersSwagger: include('openAPI/usersSwagger/createUsersSwagger'),
    deleteUsersSwagger: include('openAPI/usersSwagger/deleteUsersSwagger'),
    getUserByIdSwagger: include('openAPI/usersSwagger/getUserByIdSwagger'),
    getUsersSwagger: include('openAPI/usersSwagger/getUsersSwagger'),
    patchUsersSwagger: include('openAPI/usersSwagger/patchUsersSwagger')
}

const tasks = {
    createTasksSwagger: include('openAPI/tasksSwagger/createTasksSwagger'),
    deleteTasksSwagger: include('openAPI/tasksSwagger/deleteTasksSwagger'),
    getTaskByIdSwagger: include('openAPI/tasksSwagger/getTaskByIdSwagger'),
    getTasksSwagger: include('openAPI/tasksSwagger/getTasksSwagger'),
    patchTasksSwagger: include('openAPI/tasksSwagger/patchTasksSwagger')
}

exports.users = users
exports.tasks = tasks
