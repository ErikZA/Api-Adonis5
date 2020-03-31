cat > ./src/database/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import * as Sequelize from 'sequelize'

module.exports = {
  // tslint:disable-next-line:variable-name
  up: async (queryInterface: Sequelize.QueryInterface, Sequelize: SequelizeStatic) => {
   return QueryInterface.createTable('users', {
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
  },
  // tslint:disable-next-line:variable-name
  down: async (queryInterface: Sequelize.QueryInterface, Sequelize: SequelizeStatic) => {
    return QueryInterface.dropTable('users')
  },
};
EOF