/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const IniciosController = () => import('#controllers/inicios_controller')
import router from '@adonisjs/core/services/router'
const DashboardController = () => import('#controllers/dashboard_controller')
import { middleware } from '#start/kernel'
const AuthController = () => import('#controllers/auth_controller')
const InventoriesController = () => import('#controllers/inventarios_controller')
const ProductosController = () => import('#controllers/productos_controller')
const RecepcionesController = () => import('#controllers/recepcions_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/dashboard', [DashboardController, 'index']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('inicio', [IniciosController, 'index'])

router.post('/login', [AuthController, 'login'])

router.get('/inventario', [InventoriesController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.get('/inventario/:id', [InventoriesController, 'get']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.post('/inventario', [InventoriesController, 'create']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.patch('/inventario/:id', [InventoriesController, 'update']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.delete('/inventario/:id', [InventoriesController, 'destroy']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('/productos', [ProductosController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.post('/productos', [ProductosController, 'create']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('/productos/:id', [ProductosController, 'get']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.put('/productos/:id', [ProductosController, 'update']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.delete('/productos/:id', [ProductosController, 'destroy']).use(
  middleware.auth({
    guards: ['api'],
  })
)

// Rutas CRUD + PATCH para Recepciones
router.get('/recepcion', [RecepcionesController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.post('/recepcion', [RecepcionesController, 'create']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.get('/recepcion/:id', [RecepcionesController, 'get']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.put('/recepcion/:id', [RecepcionesController, 'update']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.patch('/recepcion/:id', [RecepcionesController, 'patch']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.delete('/recepcion/:id', [RecepcionesController, 'destroy'])
