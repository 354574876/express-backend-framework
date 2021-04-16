const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello world')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('hello world')
})
module.exports = router
