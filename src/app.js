const express = require('express')
const globals = require('./config/globals')
const mongoose = require('./config/mongoose')

const app = express()
const router = express.Router()
const routes = include('routes')(router)

app.use(express.json())
app.use('', router)

module.exports = app
