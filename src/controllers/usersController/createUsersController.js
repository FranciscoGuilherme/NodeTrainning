const User = include('models/users')
const HttpStatus = require('http-status-codes')

const createUsers = async (req, res) => {
    const user = new User(req.body)

    try {
        await User.create(user)

        res.status(HttpStatus.CREATED).send(user)
    }
    catch (error) {
        res.status(HttpStatus.BAD_REQUEST).send({
            message: error
        })
    }
}

module.exports = createUsers
