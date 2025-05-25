import type { HttpContext } from '@adonisjs/core/http'
import Recepcion from '#models/recepcion'

export default class RecepcionesController {
  // GET /recepciones?page=1&limit=10&producto=arroz
  async list({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const productoNombre = request.input('producto')

    const query = Recepcion.query()
      .preload('producto')
      .preload('unidadMedida')
      .orderBy('created_at', 'desc')

    if (productoNombre) {
      query.whereHas('producto', (p) => {
        p.whereILike('nombre', `%${productoNombre}%`)
      })
    }

    const paginated = await query.paginate(page, limit)

    return response.ok({
      data: paginated.all(),
      total: paginated.getMeta().total,
    })
  }

  // POST /recepciones
  async create({ request, response }: HttpContext) {
    const data = request.only(['producto_id', 'unidad_medida_id', 'cantidad', 'observacion'])

    const recepcion = await Recepcion.create(data)
    await recepcion.load('producto')
    await recepcion.load('unidadMedida')

    return response.created(recepcion)
  }

  // GET /recepciones/:id
  async get({ params, response }: HttpContext) {
    const recepcion = await Recepcion.findOrFail(params.id)
    await recepcion.load('producto')
    await recepcion.load('unidadMedida')

    return response.ok(recepcion)
  }

  // PUT /recepciones/:id
  async update({ params, request, response }: HttpContext) {
    const recepcion = await Recepcion.findOrFail(params.id)

    const data = request.only(['producto_id', 'unidad_medida_id', 'cantidad', 'observacion'])

    recepcion.merge(data)
    await recepcion.save()
    await recepcion.load('producto')
    await recepcion.load('unidadMedida')

    return response.ok(recepcion)
  }

  // PATCH /recepciones/:id
  async patch({ params, request, response }: HttpContext) {
    const recepcion = await Recepcion.findOrFail(params.id)

    const data = request.only(['producto_id', 'unidad_medida_id', 'cantidad', 'observacion'])

    recepcion.merge(data)
    await recepcion.save()
    await recepcion.load('producto')
    await recepcion.load('unidadMedida')

    return response.ok(recepcion)
  }

  // DELETE /recepciones/:id
  async destroy({ params, response }: HttpContext) {
    const recepcion = await Recepcion.findOrFail(params.id)
    await recepcion.delete()
    return response.noContent()
  }
}
