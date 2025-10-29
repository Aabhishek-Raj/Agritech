import express from 'express'
import * as userController from '../controller/user.controller'

const router = express.Router()

router.get('/', userController.getUsers)
router.post('/', userController.createUser)

export default router
