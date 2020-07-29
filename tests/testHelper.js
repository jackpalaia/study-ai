const Card = require('../models/Card')
const Set = require('../models/Set')
const User = require('../models/User')

const initialCards = [
  {
    front: 'card 1 front',
    back: 'card 1 back'
  },
  {
    front: 'card 2 front',
    back: 'card 2 back'
  },
  {
    front: 'card 3 front',
    back: 'card 3 back'
  }
]

const nonExistingCardId = async () => {
  const card = new Card({ front: 'front', back: 'back' })
  await card.save()
  await card.remove()
  return card.id.toString()
}

const cardsInDb = async () => {
  const cards = await Card.find({})
  return cards.map(c => c.toJSON())
}

const setsInDb = async () => {
  const sets = await Set.find({})
  return sets.map(s => s.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = { initialCards, nonExistingCardId, cardsInDb, setsInDb, usersInDb }