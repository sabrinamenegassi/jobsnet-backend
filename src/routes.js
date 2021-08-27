const { Router } = require('express')

const LocationController = require('./controllers/LocationController')
const UserController = require('./controllers/UserController')

const routes = Router()

routes.get('/location', LocationController.getLocation)
routes.post('/user', UserController.postUser)

module.exports = routes
