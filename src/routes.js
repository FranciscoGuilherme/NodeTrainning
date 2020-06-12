const usersController = include('controllers/usersController/usersController')
const tasksController = include('controllers/tasksController/tasksController')

const routes = (router) => {
    router.post('/users', usersController.createUsers)
    router.get('/users', usersController.getUsers)
    router.get('/users/:id', usersController.getUserById)
    router.patch('/users/:id', usersController.patchUsers)
    router.delete('/users/:id', usersController.deleteUsers)

    router.post('/tasks', tasksController.createTasks)
    router.get('/tasks', tasksController.getTasks)
    router.get('/tasks/:id', tasksController.getTaskById)
    router.patch('/tasks/:id', tasksController.patchTasks)
    router.delete('/tasks/:id', tasksController.deleteTasks)
}

module.exports = routes
