import { Router } from 'express'

import { UserController  } from '@controllers'
import { AuthMiddleware } from '@middlewares'

const router = Router()

router.get('/', AuthMiddleware.verifyToken, UserController.index)
router.get('/:id', AuthMiddleware.verifyToken, UserController.show)
router.post('/', UserController.create)
router.put('/:id', AuthMiddleware.verifyToken, UserController.update)
router.delete('/:id', AuthMiddleware.verifyToken, UserController.delete)

export default router