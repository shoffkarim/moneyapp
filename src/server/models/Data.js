const { Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  incomes: [
    {
      name: {type: String, required: true, unique: true},
      icon: {type: String, required: true},
      color: {type: String, required: true},
      value: {type: Number, required: true}
    }
  ],
  accounts: [
    {
      name: {type: String, required: true, unique: true},
      icon: {type: String, required: true},
      color: {type: String, required: true},
      value: {type: Number, required: true}
    }
  ],
  expenses: [
    {
      name: {type: String, required: true, unique: true},
      icon: {type: String, required: true},
      color: {type: String, required: true},
      value: {type: Number, required: true}
    }
  ],
})

module.exports = model('Data', schema)