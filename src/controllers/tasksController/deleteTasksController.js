const Task = include('models/task')
const HttpStatus = require('http-status-codes')

const deleteTasks = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

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

module.exports = deleteTasks
