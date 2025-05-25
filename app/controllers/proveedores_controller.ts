import type { HttpContext } from '@adonisjs/core/http'
import Proveedores from '#models/proveedores'

export default class ProveedoresController {
  // GET /proveedores?page=1&limit=10&nombre=...
  async list({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const nombre = request.input('nombre')

    const query = Proveedores.query()

    if (nombre) {
      query.whereILike('nombre', `%${nombre}%`)
    }

    const paginated = await query.paginate(page, limit)

    return response.ok({
      data: paginated.all(),
      total: paginated.getMeta().total,
    })
  }

  // POST /proveedores
  async create({ request, response }: HttpContext) {
    const data = request.only(['nombre', 'telefono', 'correo', 'direccion'])

    const proveedor = await Proveedores.create(data)

    return response.created(proveedor)
  }

  // GET /proveedores/:id
  async get({ params, response }: HttpContext) {
    const proveedor = await Proveedores.findOrFail(params.id)
    return response.ok(proveedor)
  }

  // PATCH /proveedores/:id
  async update({ params, request, response }: HttpContext) {
    const proveedor = await Proveedores.findOrFail(params.id)

    const data = request.only(['nombre', 'telefono', 'correo', 'direccion'])

    proveedor.merge(data)
    await proveedor.save()

    return response.ok(proveedor)
  }

  // DELETE /proveedores/:id
  async destroy({ params, response }: HttpContext) {
    const proveedor = await Proveedores.findOrFail(params.id)
    await proveedor.delete()
    return response.noContent()
  }
}
