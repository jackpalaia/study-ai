const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info(req.method)
  logger.info(req.path)
  logger.info(req.body)
  logger.info('---')
  next()
}

const unknownEnpoint = (req, res) => {
  res.status(404).json({ error: 'unknown endpoint' })
}

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).json({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' })
  }

  next(error)
}

module.exports = { requestLogger, unknownEnpoint, errorHandler }