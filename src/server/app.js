const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.router'))
app.use('/api', require('./routes/start.router'))
app.use('/api', require('./routes/data.router'))

async function start() {

  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(PORT, () => console.log(`App started on ${PORT}`))

  } catch (error) {
    console.log('Server error', error)
    process.exit(1)
  }
}

start()