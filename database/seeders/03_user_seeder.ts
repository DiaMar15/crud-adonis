import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        nombre: 'Adso',
        apellido: 'Noche',
        tipo_documento_id: 1,
        numero_documento: '1000000',
        correo: 'adso@example.com',
        password: '1234',
        numero_telefono: '3000000000',
        created_at: DateTime.now(),
      },
      {
        nombre: 'Juan',
        apellido: 'Pérez',
        tipo_documento_id: 1,
        numero_documento: '123456789',
        correo: 'juan.perez@example.com',
        password: '0000',
        numero_telefono: '3001234567',
        created_at: DateTime.now(),
      },
      {
        nombre: 'Ana',
        apellido: 'Gómez',
        tipo_documento_id: 2,
        numero_documento: '987654321',
        correo: 'ana.gomez@example.com',
        password: '4567',
        numero_telefono: '3209876543',
        created_at: DateTime.now(),
      },
      {
        nombre: 'Rigoberto',
        apellido: 'Uran',
        tipo_documento_id: 3,
        numero_documento: '1122334455',
        correo: 'rigoberto.uran@example.com',
        password: '8901',
        numero_telefono: '3101122334',
        created_at: DateTime.now(),
      },
      {
        nombre: 'Romain',
        apellido: 'Bourdon',
        tipo_documento_id: 1,
        numero_documento: '11111111',
        correo: 'romain@adonisjs.com',
        password: '1234',
        numero_telefono: '3009999999',
        created_at: DateTime.now(),
      },
    ])
  }
}
