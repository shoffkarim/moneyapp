const { Router } = require('express')
const Data = require('../models/Data')

const router = Router()

router.post('/accounts', async (req, res) => {
  try {

    const accounts = await Data.findOne({name: "Karim"})
    res.json(accounts)

  } catch (error) {
    res.status(500).json({ message: "Something wrong, try later"})
  }
})

module.exports = router