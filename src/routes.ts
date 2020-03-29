import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.getUsers)
routes.post('/users', UserController.postUser)

export default routes
