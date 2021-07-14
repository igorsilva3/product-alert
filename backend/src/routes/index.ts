import { Router } from 'express'

import helloWorldRouter from './helloWorldRouter' 

const router = Router()

router.use(helloWorldRouter)

export default router