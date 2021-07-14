import { Router } from 'express'

import { helloWorldController } from '../controllers'

const router = Router()

router.get('/', helloWorldController.index)

export default router