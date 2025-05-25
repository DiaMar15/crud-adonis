import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'historial_inventarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('producto_id')
        .unsigned()
        .references('id')
        .inTable('productos')
        .onDelete('CASCADE')
        .notNullable()

      table.enum('tipo_movimiento', ['Entrada', 'Salida', 'Ajuste']).notNullable()
      table.integer('cantidad').notNullable()
      table.timestamp('fecha', { useTz: true }).notNullable()
      table.text('descripcion').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
