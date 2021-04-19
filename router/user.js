const express = require('express')
const userCtr = require('../controller/user')
const { body, validationResult } = require('express-validator')

const router = express.Router()
/**
 * 获取用户
 */
router.get('/user', (req, res, next) => {
  try {
    throw new Error(1234)
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
 * 注册
 */
router.post(
  '/users',
  [
    body('user.username').notEmpty(),
    body('user.password').notEmpty(),
    body('user.email').notEmpty(),
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  },
  userCtr.register
)
/**
 * 登陆
 */
router.post('/users/login', (req, res, next) => {
  const { email, password } = req.body.user
  console.log(email, password)
  try {
    res.send('login success')
  } catch (error) {
    next(error)
  }
})

/**
 * 更新用户
 */
router.put('/user', (req, res, next) => {
  const { email, bio, image } = req.body.user
  try {
    res.send('hello world')
  } catch (error) {
    next(error)
  }
})
module.exports = router
