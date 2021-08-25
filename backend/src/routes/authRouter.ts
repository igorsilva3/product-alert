import { Router } from 'express'

import AuthController from '@controllers/AuthController'

const router = Router()

router.post('/', AuthController.signup)

export default router


