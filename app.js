const express = require('express')
require('express-async-errors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const cardsRouter = require('./controllers/cardsRouter')
const setsRouter = require('./controllers/setsRouter')
const usersRouter = require('./controllers/usersRouter')
const loginRouter = require('./controllers/loginRouter')
const middleware = require('./utils/middleware')
const cors = require('cors')

const app = express()

try {
  (async () => {
    await mongoose.connect(config.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    logger.info('connected to MongoDB')
  })()
} catch (error) {
  logger.error(`error connecting to MongoDB: ${error}`)
}
mongoose.set('useFindAndModify', false)

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/cards', cardsRouter)
app.use('/api/sets', setsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEnpoint)
app.use(middleware.errorHandler)

module.exports = app