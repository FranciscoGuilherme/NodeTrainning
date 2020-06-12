const getUsers = include('controllers/usersController/getUsersController')
const patchUsers = include('controllers/usersController/patchUsersController')
const getUserById = include('controllers/usersController/getUserByIdController')
const createUsers = include('controllers/usersController/createUsersController')
const deleteUsers = include('controllers/usersController/deleteUsersController')

const usersController = {
    getUsers: getUsers,
    patchUsers: patchUsers,
    getUserById: getUserById,
    createUsers: createUsers,
    deleteUsers: deleteUsers
}

module.exports = usersController
