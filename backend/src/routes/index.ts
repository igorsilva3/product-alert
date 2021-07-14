import { Router } from 'express'

import helloWorldRouter from './helloWorldRouter' 
import userRouter from './userRouter'

const router = Router()

router.use(helloWorldRouter)
router.use('/users', userRouter)

export default router