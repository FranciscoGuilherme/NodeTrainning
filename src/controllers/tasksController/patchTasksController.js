const Task = include('models/task')
const HttpStatus = require('http-status-codes')

const patchTasks = async (req, res) => {
    if (!fieldIsValid(req.body)) {
        return res.status(HttpStatus.BAD_REQUEST).send({
            message: 'Sent field not allowed to update.'
        })
    }

    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!task) {
            return res.status(HttpStatus.NOT_FOUND).send({
                message: 'Task not found on our system.'
            })
        }

        res.status(HttpStatus.OK).send(task)
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
        'completed',
        'description'
    ].includes(update))
}

module.exports = patchTasks
