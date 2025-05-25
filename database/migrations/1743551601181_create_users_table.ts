import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('nombre').notNullable()
      table.string('apellido').notNullable()
      table
        .bigInteger('tipo_documento_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('tipos_documentos')
        .onDelete('CASCADE')
      table.string('numero_documento').notNullable().unique()
      table.string('correo', 254).notNullable().unique()
      table.string('password').notNullable()
      table.string('numero_telefono').nullable().unique()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
