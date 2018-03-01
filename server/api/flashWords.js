const router = require('express').Router()
const { FlashWord } = require('../db/models')
module.exports = router

/* get all flashWords */
router.get('/', (req, res, next) => {
  FlashWord.findAll()
    .then(flashWords => res.json(flashWords))
    .catch(next)
})
