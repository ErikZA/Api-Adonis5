import { Sequelize } from 'sequelize'

const dbConfig = this.require('../config/database')

const connection = new Sequelize(dbConfig)

module.exports = connection
