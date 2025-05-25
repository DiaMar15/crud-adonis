import type { HttpContext } from '@adonisjs/core/http'
import Producto from '#models/producto'

export default class ProductosController {
  // GET /productos?page=1&limit=10&nombre=arroz
  async list({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const nombre = request.input('nombre')

    const query = Producto.query().preload('categoria').preload('unidadMedida')

    if (nombre) {
      query.whereILike('nombre', `%${nombre}%`)
    }

    const paginated = await query.paginate(page, limit)

    return response.ok({
      data: paginated.all(),
      total: paginated.getMeta().total,
    })
  }

  // POST /productos
  async create({ request, response }: HttpContext) {
    const data = request.only([
      'nombre',
      'descripcion',
      'precio',
      'categoria_id',
      'unidad_medida_id',
      'disponible',
    ])

    const producto = await Producto.create(data)
    await producto.load('categoria')
    await producto.load('unidadMedida')

    return response.created(producto)
  }

  // GET /productos/:id
  async get({ params, response }: HttpContext) {
    const producto = await Producto.findOrFail(params.id)
    await producto.load('categoria')
    await producto.load('unidadMedida')

    return response.ok(producto)
  }

  // PUT /productos/:id
  async update({ params, request, response }: HttpContext) {
    const producto = await Producto.findOrFail(params.id)

    const data = request.only([
      'nombre',
      'descripcion',
      'precio',
      'categoria_id',
      'unidad_medida_id',
      'disponible',
    ])

    producto.merge(data)
    await producto.save()
    await producto.load('categoria')
    await producto.load('unidadMedida')

    return response.ok(producto)
  }

  // DELETE /productos/:id
  async destroy({ params, response }: HttpContext) {
    const producto = await Producto.findOrFail(params.id)
    await producto.delete()
    return response.noContent()
  }
}
