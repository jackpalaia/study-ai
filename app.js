const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const cardsRouter = require('./controllers/cardsRouter')
const setsRouter = require('./controllers/setsRouter')
const usersRouter = require('./controllers/usersRouter')
const cors = require('cors')

logger.info('connecting to MongoDB')
try {
  (async () => {
    await mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    logger.info('connected to MongoDB')
  })()
} catch (error) {
  logger.error(`error connecting to MongoDB: ${error}`)
}

app.use(cors())
app.use(express.json())

app.use('/api/cards', cardsRouter)
app.use('/api/sets', setsRouter)
app.use('/api/users', usersRouter)

module.exports = app