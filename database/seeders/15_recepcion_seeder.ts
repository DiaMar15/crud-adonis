import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Recepcion from '#models/recepcion'

export default class extends BaseSeeder {
  async run() {
    await Recepcion.createMany([
      {
        producto_id: 1,
        unidad_medida_id: 1,
        cantidad: 100,
        observacion: 'Recepción inicial de arroz',
      },
      {
        producto_id: 2,
        unidad_medida_id: 1,
        cantidad: 50,
        observacion: 'Entrega semanal de frijoles',
      },
      {
        producto_id: 1,
        unidad_medida_id: 2,
        cantidad: 20,
        observacion: 'Ajuste de inventario por pérdida',
      },
      {
        producto_id: 2,
        unidad_medida_id: 2,
        cantidad: 75,
        observacion: 'Recepción extra por promoción',
      },
      {
        producto_id: 1,
        unidad_medida_id: 1,
        cantidad: 30,
        observacion: 'Reabastecimiento mensual',
      },
    ])
  }
}
