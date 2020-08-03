const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const setSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  ],
  dateCreated: {
    type: Date,
    default: new Date()
  },
  username: {
    type: String,
    ref: 'User'
  }
})

setSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

module.exports = mongoose.model('Set', setSchema)