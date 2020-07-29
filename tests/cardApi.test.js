const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)
const helper = require('./testHelper')
const logger = require('../utils/logger')

const baseUrl = '/api/cards'

const Card = require('../models/Card')
const Set = require('../models/Set')

beforeEach(async () => {
  await Card.deleteMany({})
  
  const cards = helper.initialCards.map(c => new Card(c))
  const promiseArray = cards.map(c => c.save())
  await Promise.all(promiseArray)
})

describe('get', () => {
  test('all cards', async () => {
    const cards = (await api.get(baseUrl)).body
    expect(cards.length).toBe(helper.initialCards.length)
  })
  test('one card', async () => {
    // works
  })
})
describe('post', () => {
  beforeEach(async () => {
    const set = new Set({})
    await set.save()
  })
  test('one card', async () => {
    const newCard = new Card({
      front: 'front text',
      back: 'back text',
      set: ''
    })
  })
})
describe('put', () => {
  
})
describe('delete', () => {
  
})

afterAll(() => { mongoose.connection.close() })