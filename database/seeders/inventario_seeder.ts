import Inventario from '#models/inventario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const inventario = await Inventario.createMany([
      {
        codigo: 1,
        nombre_producto: 'cerveza',
        categoria: 'bebidas',
        stock: 100,
        min_stock: 10,
        unidad_medida: 'Unidad',
      },
      {
        codigo: 2,
        nombre_producto: 'cerdo',
        categoria: 'Carnes',
        stock: 100,
        min_stock: 10,
        unidad_medida: 'Unidad',
      },
      {
        codigo: 3,
        nombre_producto: 'tomate',
        categoria: 'verdura',
        stock: 100,
        min_stock: 10,
        unidad_medida: 'Unidad',
      },
      {
        codigo: 4,
        nombre_producto: 'arroz',
        categoria: 'granos',
        stock: 100,
        min_stock: 10,
        unidad_medida: 'Unidad',
      },{
        codigo: 5,
        nombre_producto: 'queso',
        categoria: 'lacteos',
        stock: 100,
        min_stock: 10,
        unidad_medida: 'Unidad',
      }
      ])
      }

  
  }

  