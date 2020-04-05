import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected $tableName = 'users'

  public async up () {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
      table.string('last_name', 100).notNullable()
      table.string('email', 150).notNullable().unique()
      table.string('password', 100).notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.$tableName)
  }
}
