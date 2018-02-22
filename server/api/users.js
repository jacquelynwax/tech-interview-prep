const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next)
})
