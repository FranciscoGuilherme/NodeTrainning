const Task = include('models/task')
const HttpStatus = require('http-status-codes')

const getTaskById = async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

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

module.exports = getTaskById
