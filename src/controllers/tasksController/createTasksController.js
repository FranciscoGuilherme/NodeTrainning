const Task = include('models/task')
const httpStatus = require('http-status-codes')

const getTasks = async (req, res) => {
    const task = new Task(req.body)

    try {
        await Task.create(task)

        res.status(httpStatus.CREATED).send(task)
    }
    catch (error) {
        res.status(httpStatus.BAD_REQUEST).send({
            message: error
        })
    }
}

module.exports = getTasks
