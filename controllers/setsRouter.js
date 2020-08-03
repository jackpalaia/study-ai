const router = require('express').Router()
const Set = require('../models/Set')
const User = require('../models/User')

router.route('/')
  .get(async (req, res) => {
    const sets = await Set.find({})
    res.send(sets.map(set => set.toJSON())).status(200).end()
  })
  .post(async (req, res) => {
    const username = req.body.username
    const user = await User.findOne({ username })
    const set = new Set({ name: req.body.name, username })
    const savedSet = await set.save()
    console.log(username)
    user.sets = user.sets.concat(savedSet.id)
    await user.save()
    res.json(savedSet.toJSON()).status(200).end()
  })

router.route('/:id')
  .get(async (req, res) => {
    const set = await Set.findById(req.params.id)
    if (set) {
      res.send(Set.toJSON()).status(200).end()
    } else {
      res.status(404).end()
    }
  })
  .put(async (req, res) => {
    const set = req.body
    const updatedSet = await Set.findByIdAndUpdate(req.params.id, set, { new: true })
    res.json(updatedSet.toJSON())
  })
  .delete(async (req, res) => {
    await Set.findByIdAndDelete(req.params.id)
    res.send(204).end()
  })

module.exports = router