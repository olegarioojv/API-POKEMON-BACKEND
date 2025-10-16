import express from 'express'
import userController from '../../controller/user/userController.js'

const routerUser = express.Router()

routerUser.post('/user', userController.createUser)

routerUser.post('/auth', userController.auth)

export default routerUser