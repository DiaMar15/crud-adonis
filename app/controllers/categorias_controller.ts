import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'

export default class CategoriasController {
  public async list({ response }: HttpContext) {
    const categoria = await Categoria.all()
    return response.ok(categoria)
  }
}
