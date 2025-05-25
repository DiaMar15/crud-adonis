import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Producto from './producto.js'
import UnidadMedida from './unidad_medida.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Recepcion extends BaseModel {
  public static table = 'recepciones'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare producto_id: number

  @column()
  declare unidad_medida_id: number

  @column()
  declare cantidad: number

  @column()
  declare observacion: string | null

  @belongsTo(() => Producto, {
    foreignKey: 'producto_id',
  })
  declare producto: BelongsTo<typeof Producto>

  @belongsTo(() => UnidadMedida, {
    foreignKey: 'unidad_medida_id',
  })
  declare unidadMedida: BelongsTo<typeof UnidadMedida>
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
