const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

exports.login = async (req, res, next) => {
  try {
    // 1. 数据验证
    // 2. 生成 token
    const user = req.user.toJSON()
    const token = await jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret,
      {
        expiresIn: 60 * 60 * 24,
      }
    )

    // 3. 发送成功响应（包含 token 的用户信息）
    delete user.password
    res.status(200).json({
      ...user,
      token,
    })
  } catch (error) {
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)
    await user.save()
    user = user.toJSON()
    delete user.password
    res.status(201).json({
      user,
    })
  } catch (error) {
    next(error)
  }
}

exports.getUser = async (req, res, next) => {
  try {
    const { username } = req.params
    const user = await User.findOne({ username })
    res.status(200).json({
      user: user ? user : '用户不存在',
    })
  } catch (error) {
    next(error)
  }
}
