import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'productos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.text('descripcion').nullable()
      table.decimal('precio', 10, 2).notNullable()

      table
        .integer('categoria_id')
        .unsigned()
        .references('id')
        .inTable('categorias')
        .onDelete('CASCADE')
        .notNullable()

      table
        .integer('unidad_medida_id')
        .unsigned()
        .references('id')
        .inTable('unidades_medida')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable()

      table.boolean('disponible').defaultTo(true)
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
