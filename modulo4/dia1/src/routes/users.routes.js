import { Router } from 'express'
import UserController from '../controllers/user.controller.js'

const router = Router()

router.post('/', UserController.store)

export default router