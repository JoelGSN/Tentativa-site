import * as cliente_controllers from '../controllers/cliente_controllers.js'
import { Router } from 'express'

const router = Router()

router.get('/', cliente_controllers.listar )

router.get('/:id', cliente_controllers.buscarid )

router.post('/', cliente_controllers.cadastrar)

router.delete('/:id', cliente_controllers.remover)

router.put('/:id', cliente_controllers.atualizar)

export default router