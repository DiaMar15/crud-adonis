import { BaseSeeder } from '@adonisjs/lucid/seeders'
import HistorialInventario from '#models/historial_inventario'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await HistorialInventario.createMany([
      {
        producto_id: 1,
        tipoMovimiento: 'Entrada',
        cantidad: 50,
        fecha: DateTime.fromISO('2025-01-01'),
        descripcion: 'Ingreso inicial de producto',
        created_at: DateTime.now(),
      },
      {
        producto_id: 2,
        tipoMovimiento: 'Salida',
        cantidad: 10,
        fecha: DateTime.fromISO('2025-01-01'),
        descripcion: 'Venta realizada',
        created_at: DateTime.now(),
      },
      {
        producto_id: 1,
        tipoMovimiento: 'Ajuste',
        cantidad: 5,
        fecha: DateTime.fromISO('2025-01-01'),
        descripcion: 'Ajuste por inventario',
        created_at: DateTime.now(),
      },
      {
        producto_id: 3,
        tipoMovimiento: 'Entrada',
        cantidad: 100,
        fecha: DateTime.fromISO('2025-01-01'),
        descripcion: 'Compra al proveedor',
        created_at: DateTime.now(),
      },
      {
        producto_id: 2,
        tipoMovimiento: 'Salida',
        cantidad: 20,
        fecha: DateTime.fromISO('2025-01-01'),
        descripcion: 'Devolución a almacén',
        created_at: DateTime.now(),
      },
    ])
  }
}
