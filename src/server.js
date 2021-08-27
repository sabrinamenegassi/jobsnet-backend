const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes')

const app = express()
const subpath = express()

const swagger = require('swagger-node-express').createNew(subpath)

swagger.setApiInfo({
  title: 'JobsNET',
  termsOfServiceUrl: '',
  license: '',
  licenseUrl: ''
})

app.get('/', ({ res }) => {
  res.sendFile(__dirname + '/dist/index.html')
})

swagger.configureSwaggerPaths('', 'api-docs', '')

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json')

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)
