import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TipoDocumento extends BaseModel {
  public static table = 'tipos_documentos'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare abreviatura: string

  @column.dateTime({ columnName: 'created_at' })
  declare created_at: DateTime

  @column.dateTime({ columnName: 'updated_at' })
  declare updated_at: DateTime | null
}
