import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  protected tableName = 'recepciones'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('producto_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('productos')
        .onDelete('CASCADE')

      table
        .integer('unidad_medida_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('unidades_medida')
        .onDelete('CASCADE')

      table.integer('cantidad').notNullable()

      table.text('observacion').nullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
