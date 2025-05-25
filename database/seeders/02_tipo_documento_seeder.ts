import { BaseSeeder } from '@adonisjs/lucid/seeders'
import TipoDocumento from '#models/tipo_documento'
import { DateTime } from 'luxon'

export default class TiposDocumentoSeeder extends BaseSeeder {
  public async run() {
    await TipoDocumento.createMany([
      {
        nombre: 'Cédula de Ciudadanía',
        abreviatura: 'CC',
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre: 'Tarjeta de Identidad',
        abreviatura: 'TI',
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre: 'Cédula de Extranjería',
        abreviatura: 'CE',
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre: 'Pasaporte',
        abreviatura: 'PA',
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre: 'NIT',
        abreviatura: 'NIT',
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        nombre: 'Registro Civil',
        abreviatura: 'RC',
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
    ])
  }
}
