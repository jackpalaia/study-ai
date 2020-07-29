const router = require('express').Router()
const Card = require('../models/Card')
const Set = require('../models/Set')

router.route('/')
  .get(async (req, res) => {
    const cards = await Card.find({})
    res.send(cards.map(card => card.toJSON())).status(200).end()
  })
  .post(async (req, res) => {
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