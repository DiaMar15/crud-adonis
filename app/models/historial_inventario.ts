import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Producto from './producto.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class HistorialInventario extends BaseModel {
  public static table = 'historial_inventarios'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare producto_id: number

  @column()
  declare tipoMovimiento: 'Entrada' | 'Salida' | 'Ajuste'

  @column()
  declare cantidad: number

  @column.dateTime()
  declare fecha: DateTime

  @column()
  declare descripcion: string | null

  @belongsTo(() => Producto, {
    foreignKey: 'producto_id',
  })
  declare producto: BelongsTo<typeof Producto>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
