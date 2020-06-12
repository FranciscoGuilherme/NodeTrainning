const User = include('models/users')
const HttpStatus = require('http-status-codes')

const deleteUsers = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(HttpStatus.NOT_FOUND).send({
                message: 'User not found on our system.'
            })
        }

        res.status(HttpStatus.OK).send(user)
    }
    catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            message: error
        })
    }
}

module.exports = deleteUsers
