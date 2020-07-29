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
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: new Date()
  }
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
    delete obj.passwordHash
  }
})

module.exports = mongoose.model('User', userSchema)