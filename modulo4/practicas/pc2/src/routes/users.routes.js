import { Router } from 'express'
import UserController from '../controllers/user.controller.js'

const router = Router()

router.post('/login', UserController.login)
router.get('/verify', UserController.verify)

export default router