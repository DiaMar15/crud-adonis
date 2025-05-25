import UnidadMedida from '#models/unidad_medida'
import type { HttpContext } from '@adonisjs/core/http'

export default class UnidadMedidasController {
  public async list({ response }: HttpContext) {
    const unidad = await UnidadMedida.all()
    return response.ok(unidad)
  }
}
