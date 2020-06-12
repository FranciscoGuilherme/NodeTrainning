const mongoose = require('mongoose')
const validator = require('validator')
const uniqueValidator = require('mongoose-unique-validator')

const Task = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        trim: true
    }
})

Task.plugin(uniqueValidator)

module.exports = mongoose.model('Task', Task)
