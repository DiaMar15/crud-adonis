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
import CategoriasController from '#controllers/categorias_controller'
import UnidadMedidasController from '#controllers/unidad_medidas_controller'
const AuthController = () => import('#controllers/auth_controller')
const InventoriesController = () => import('#controllers/inventarios_controller')
const ProductosController = () => import('#controllers/productos_controller')
import ProveedoresController from '#controllers/proveedores_controller'
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/inicio', [DashboardController, 'index']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('dashboard', [IniciosController, 'index'])

router.post('/login', [AuthController, 'login'])

//rutas de inventario

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

//Rutas de Productos

router.get('/producto', [ProductosController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.post('/producto', [ProductosController, 'create']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('/producto/:id', [ProductosController, 'get']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.patch('/producto/:id', [ProductosController, 'update']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.delete('/producto/:id', [ProductosController, 'destroy']).use(
  middleware.auth({
    guards: ['api'],
  })
)

//Ruta de categoria

router.get('/categoria', [CategoriasController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)

//Ruta de Unidad de medida

router.get('/unidad-medida', [UnidadMedidasController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)

//Ruta de proveedores
router.get('/proveedores', [ProveedoresController, 'list']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.post('/proveedores', [ProveedoresController, 'create']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.get('/proveedores/:id', [ProveedoresController, 'get']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.patch('/proveedores/:id', [ProveedoresController, 'update']).use(
  middleware.auth({
    guards: ['api'],
  })
)
router.delete('/proveedores/:id', [ProveedoresController, 'destroy']).use(
  middleware.auth({
    guards: ['api'],
  })
)
