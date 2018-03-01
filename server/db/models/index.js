const User = require('./user')
const FlashWord = require('./flashWord')
const db = require('../../db')

/*
 * Associations
 */

/*
 * Export all models here, so that any time a module needs a model, we can just require it from 'db/models.'
 */
module.exports = {
  User,
  FlashWord,
  db
}
