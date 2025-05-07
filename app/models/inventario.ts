import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Inventario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public codigo: number

  @column()
  public nombre_producto: string

  @column()
  public categoria: string

  @column()
  public stock: number

  @column()
  public min_stock: number

  @column()
  public unidad_medida: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

