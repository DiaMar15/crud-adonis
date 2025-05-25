import { BaseSeeder } from '@adonisjs/lucid/seeders'
import UnidadMedida from '#models/unidad_medida'

export default class UnidadMedidaSeeder extends BaseSeeder {
  async run() {
    const unidadMedida = await UnidadMedida.createMany([
      { nombre: 'kilogramo', abreviatura: 'kg' },
      { nombre: 'libra', abreviatura: 'lb' },
      { nombre: 'litro', abreviatura: 'l' },
      { nombre: 'botella', abreviatura: 'bt' },
      { nombre: 'gramo', abreviatura: 'g' },
      { nombre: 'unidad', abreviatura: 'u' },
    ])
  }
}
