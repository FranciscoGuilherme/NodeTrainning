const Task = include('models/task')
const httpStatus = require('http-status-codes')

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()

        res.status(httpStatus.OK).send(tasks)
    }
    catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: error
        })
    }
}

module.exports = getTasks
