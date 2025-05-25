import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Proveedores from '#models/proveedores'

export default class extends BaseSeeder {
  async run() {
    await Proveedores.createMany([
      {
        nombre: 'Distribuidora El Campo',
        telefono: '3101234567',
        correo: 'contacto@elcampo.com',
        direccion: 'Carrera 10 #12-34, Bogotá',
      },
      {
        nombre: 'Proveedor Alimentos S.A.S.',
        telefono: '3207654321',
        correo: 'ventas@alimentos.com',
        direccion: 'Calle 50 #25-10, Medellín',
      },
      {
        nombre: 'Empaques del Sur',
        telefono: '3223133266',
        correo: 'info@empaquesdelsur.co',
        direccion: 'Zona Industrial, Cali',
      },
    ])
  }
}
