const User = include('models/users')
const HttpStatus = require('http-status-codes')

const patchUsers = async (req, res) => {
    if (!fieldIsValid(req.body)) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            message: 'Sent field not allowed to update.'
        })
    }

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

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

const fieldIsValid = (body) => {
    const updates = Object.keys(body)

    return updates.every((update) => [
        'name',
        'email',
        'password',
        'age'
    ].includes(update))
}

module.exports = patchUsers
