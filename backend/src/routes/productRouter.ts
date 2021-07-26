import { Router } from 'express'

import { ProductController } from '@controllers'

const router = Router()

router.get('/', ProductController.index)
router.get('/:id', ProductController.show)
router.post('/', ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

export default router
