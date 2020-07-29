const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
require('dotenv').config()

router.post('/', async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(req.body.password, user.passwordHash)
  
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  res.status(200).json({ token, username: user.username, name: user.name })
})

module.exports = router