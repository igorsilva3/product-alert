import { Router } from 'express'

import userRouter from '@routes/userRouter'

const router = Router()

router.use('/users', userRouter)

export default router
