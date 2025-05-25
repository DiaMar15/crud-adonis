import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const categoria = await Categoria.createMany([
      { nombre: 'carnes' },
      { nombre: 'bebidas' },
      { nombre: 'lacteos' },
      { nombre: 'granos' },
      { nombre: 'condimentos' },
      { nombre: 'salsas' },
      { nombre: 'verduras' },
      { nombre: 'frutas' },
      { nombre: 'mariscos' },
      { nombre: 'pescados' },
      { nombre: 'harinas' },
      { nombre: 'aceites' },
      { nombre: 'bebidas alcoholicas' },
      { nombre: 'postres' },
      { nombre: 'productos de limpieza' },
      { nombre: 'desechables y empaques' },
    ])
  }
}
