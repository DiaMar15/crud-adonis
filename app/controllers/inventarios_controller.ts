import Inventario from '#models/inventario'
import type { HttpContext } from '@adonisjs/core/http'

export default class InventoriesController {
    async index({ response }: HttpContext) {
    const items = await Inventario.all()
    return response.ok(items)
  }

   async store({ request, response }: HttpContext) {
    const data = request.only(['codigo', 'nombre_producto', 'categoria','stock','min_stock','unidad_medida'])
    const item = await Inventario.create(data)
    return response.created(item)
  }

   async show({ params, response }: HttpContext) {
    const item = await Inventario.findOrFail(params.id)
    return response.ok(item)
  }

   async update({ params, request, response }: HttpContext) {
    const item = await Inventario.findOrFail(params.id)
    const data = request.only(['codigo', 'nombre_producto', 'categoria','stock','min_stock','unidad_medida'])
    item.merge(data)
    await item.save()
    return response.ok(item)
  }

   async destroy({ params, response }: HttpContext) {
    const item = await Inventario.findOrFail(params.id)
    await item.delete()
    return response.noContent()
  }
}