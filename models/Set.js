const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const setSchema = new mongoose.Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
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