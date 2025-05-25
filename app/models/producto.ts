import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Categoria from './categoria.js'
import UnidadMedida from './unidad_medida.js'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Producto extends BaseModel {
  public static table = 'productos'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null

  @column()
  declare precio: number

  @column()
  declare categoria_id: number

  @column()
  declare unidad_medida_id: number

  @column()
  declare disponible: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Categoria, {
    foreignKey: 'categoria_id',
  })
  declare categoria: BelongsTo<typeof Categoria>

  @belongsTo(() => UnidadMedida, {
    foreignKey: 'unidad_medida_id',
  })
  declare unidadMedida: BelongsTo<typeof UnidadMedida>
}
