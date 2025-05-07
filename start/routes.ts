/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import IniciosController from '#controllers/inicios_controller'
import router from '@adonisjs/core/services/router'
import DashboardController from '#controllers/dashboard_controller'
import { middleware } from '#start/kernel'
import AuthController from '#controllers/auth_controller'
import InventoriesController from '#controllers/inventarios_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/dashboard', [DashboardController, 'index'])
  .use(middleware.auth({
    guards: ['api']
  }))

router.get('inicio', [IniciosController, 'index'])

router.post('/login', [AuthController, 'login'])

router.get('/inventario',[InventoriesController, 'index']).use(middleware.auth({
  guards: ['api']
}))
router.get('/inventario/:id',[InventoriesController, 'show']).use(middleware.auth({
  guards: ['api']
}))
router.post('/inventario',[InventoriesController, 'store']).use(middleware.auth({
  guards: ['api']
}))
router.patch('/inventario/:id',[InventoriesController, 'update']).use(middleware.auth({
  guards: ['api']
}))
router.delete('/inventario/:id',[InventoriesController, 'destroy']).use(middleware.auth({
  guards: ['api']
}))
