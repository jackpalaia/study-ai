const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.route('/')
  .get(async (req, res) => {
    const users = await User.find({})
    res.json(users.map(u => u.toJSON())).status(200).end()
  })
  .post(async (req, res) => {
    const { name, username, password } = req.body
    const minLength = 5

    if (!password || password.length < minLength) {
      return res.status(400).json({
        error: `password must be at least ${minLength} characters`
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({ name, username, passwordHash })
    const savedUser = await user.save()
    res.json(savedUser.toJSON()).status(200).end()
  })

router.route('/:id')
  .get(async (req, res) => {
    const card = await Card.findById(req.params.id)
    if (card) {
      res.send(card.toJSON()).status(200).end()
    } else {
      res.status(404).end()
    }
  })
  .put(async (req, res) => {
    const card = req.body
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, task, { new: true })
    res.send(updatedCard.toJSON())
  })
  .delete(async (req, res) => {
    await Card.findByIdAndDelete(req.params.id)
    res.send(204).end()
  })

module.exports = router