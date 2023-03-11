const { Router } = require('express')
const Data = require('../models/Data')

const router = Router()

router.post('/start', async (req, res) => {
  try {
    const {name, incomes, accounts, expenses} = req.body

    const data = new Data({name, incomes, accounts, expenses})
    await data.save()

    res.status(200).json({ message: 'User created successful'})


  } catch (error) {
    res.status(500).json({ message: "Something wrong, try later"})
  }
})

module.exports = router