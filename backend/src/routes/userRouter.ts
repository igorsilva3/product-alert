import { Router } from 'express'

import { UserController  } from '@controllers'

const router = Router()

router.get('/', UserController.index)
router.get('/:id', UserController.show)
router.post('/', UserController.create)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.delete)

export default router