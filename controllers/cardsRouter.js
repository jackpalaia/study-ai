const router = require('express').Router()
const Card = require('../models/Card')
const Set = require('../models/Set')
const jwt = require('jsonwebtoken')

router.route('/')
  .get(async (req, res) => {
    const cards = await Card.find({})
    res.send(cards.map(card => card.toJSON())).status(200).end()
  })
  .post(async (req, res) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    console.log(req.token)
    console.log(decodedToken)
    if (!req.token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' }).end()
    }
    const set = await Set.findById(req.body.set)
    const card = new Card(req.body)
    const savedCard = await card.save()
    set.cards = set.cards.concat(savedCard.id)
    await set.save()
    res.send(savedCard.toJSON()).status(200).end()
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
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, card, { new: true })
    res.send(updatedCard.toJSON())
  })
  .delete(async (req, res) => {
    await Card.findByIdAndDelete(req.params.id)
    res.send(204).end()
  })

module.exports = router