import * as prod_controllers from '../controllers/produto_controllers.js'
import { Router } from 'express'

const router = Router()

router.get('/', prod_controllers.listar )

router.get('/:id', prod_controllers.buscarid )

router.post('/', prod_controllers.cadastrar)

router.delete('/:id', prod_controllers.remover)

router.put('/:id', prod_controllers.atualizar)


//comprar
router.post('/:id/comprar', prod_controllers.comprar)
//vender
router.post('/:id/vender', prod_controllers.vender)


export default router