const express = require('express')

const router = express.Router()

// get profiles
router.get('/profiles/:username', (req, res, next) => {
  try {
    res.json({
      username: 'Jacob',
      email: 'jake@jake.jake',
      password: 'jakejake',
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 关注
 */
router.post('/profiles/:username/follow', (req, res, next) => {
  const { email, password, username } = req.body.user
  console.log(email, password)
  try {
    res.send('login success')
  } catch (error) {
    next(error)
  }
})
/**
 * 取关
 */
router.delete('/profiles/:username/follow', (req, res, next) => {
  const { email, password, username } = req.body.user
  console.log(email, password)
  try {
    res.send('login success')
  } catch (error) {
    next(error)
  }
})

module.exports = router
