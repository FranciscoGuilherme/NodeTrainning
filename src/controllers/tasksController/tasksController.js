const getTasks = include('controllers/tasksController/getTasksController')
const patchTasks = include('controllers/tasksController/patchTasksController')
const getTaskById = include('controllers/tasksController/getTaskByIdController')
const createTasks = include('controllers/tasksController/createTasksController')
const deleteTasks = include('controllers/tasksController/deleteTasksController')

const tasksController = {
    getTasks: getTasks,
    patchTasks: patchTasks,
    getTaskById: getTaskById,
    createTasks: createTasks,
    deleteTasks: deleteTasks
}

module.exports = tasksController
