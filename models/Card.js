const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const cardSchema = new mongoose.Schema({
  // value for spaced-repetition thing will be contained here
  front: {
    type: String,
    required: true
  },
  back: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  set: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Set'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

cardSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

module.exports = mongoose.model('Card', cardSchema)