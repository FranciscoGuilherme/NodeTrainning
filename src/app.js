const express = require('express')
const swaggerUi = require('swagger-ui-express')
const globals = require('./config/globals')
const mongoose = require('./config/mongoose')
const swaggerDocument = require('./openAPI/swaggerDocument')

const app = express()
const router = express.Router()
const routes = include('routes')(router)

app.use(express.json())
app.use('', router)
app.use('/doc-api',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
)

module.exports = app
