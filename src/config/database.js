// const path = require('path')

module.exports = {
  dialect: 'postgres',
  host: '192.168.0.30',
  username: 'docker',
  password: 'docker',
  database: 'gonodemodulo2',
  operatorsAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

  // storage: path.resolve('..', 'database.sqlite')
}
