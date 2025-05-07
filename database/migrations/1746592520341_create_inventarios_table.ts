import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'inventarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('codigo').notNullable()
      table.string('nombre_producto').notNullable()
      table.string('categoria').notNullable()
      table.integer('stock').notNullable()
      table.integer('min_stock').notNullable()
      table.string('unidad_medida').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}