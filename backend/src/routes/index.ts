import { Router } from 'express'

import userRouter from '@routes/userRouter'
import productRouter from '@routes/productRouter'
import authRouter from '@routes/authRouter'

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/auth', authRouter)

export default router
