const Sequelize = require('sequelize')
const db = require('../db')

const FlashWord = db.define('flashword', {
  word: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = FlashWord
