const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)

const userSchema = new mongoose.Schema({
  sets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Set'
    }
  ],
  username: {
    type: String,
    unique: true
  },
  passwordHash: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: new Date()
  }
})

userSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)