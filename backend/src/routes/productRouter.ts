import { Router } from 'express'

import { ProductController } from '@controllers'
import { AuthMiddleware } from '@middlewares'

const router = Router()

router.use(AuthMiddleware.verifyToken)

router.get('/', ProductController.index)
router.get('/:id', ProductController.show)
router.post('/', ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

export default router
