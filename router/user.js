const express = require('express')
const userCtr = require('../controller/user')
const validator = require('../validator/user')
const router = express.Router()
/**
 * 获取用户
 */
router.get('/:username', userCtr.getUser)

/**
 * 注册
 */
router.post('/register', validator.register, userCtr.register)
/**
 * 登陆
 */
router.post('/login', validator.login, userCtr.login)

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
