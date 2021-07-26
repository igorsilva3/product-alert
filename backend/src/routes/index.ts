import { Router } from 'express'

import userRouter from '@routes/userRouter'
import productRouter from '@routes/productRouter'

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)

export default router
