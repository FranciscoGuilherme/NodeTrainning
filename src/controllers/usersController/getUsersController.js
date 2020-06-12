const User = include('models/users')
const HttpStatus = require('http-status-codes')

const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(HttpStatus.OK).send(users)
    }
    catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            message: error
        })
    }
}

module.exports = getUsers
