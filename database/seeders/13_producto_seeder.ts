import Producto from '#models/producto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const productos = await Producto.createMany([
      {
        nombre: 'res',
        descripcion: 'Carne de res',
        disponible: true,
        precio: 10000,
        categoria_id: 1,
        unidad_medida_id: 2,
      },
      {
        nombre: 'bagre',
        descripcion: 'rodaja de bagre',
        disponible: true,
        precio: 9000,
        categoria_id: 10,
        unidad_medida_id: 2,
      },
      {
        nombre: 'coca cola',
        descripcion: 'coca cola sin azucar',
        disponible: true,
        precio: 5000,
        categoria_id: 2,
        unidad_medida_id: 3,
      },
      {
        nombre: 'tomate',
        descripcion: 'tomate',
        disponible: true,
        precio: 4000,
        categoria_id: 7,
        unidad_medida_id: 1,
      },
      {
        nombre: 'sal',
        descripcion: 'sal refinada',
        disponible: true,
        precio: 10000,
        categoria_id: 5,
        unidad_medida_id: 1,
      },
    ])
  }
}
