import * as Sequelize from 'sequelize'

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: Sequelize.QueryInterface, SequelizeStatic: Sequelize.Model) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      lastNmae: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true

      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },
  // tslint:disable-next-line:variable-name
  down: async (queryInterface: Sequelize.QueryInterface, SequelizeStatic: Sequelize.Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
