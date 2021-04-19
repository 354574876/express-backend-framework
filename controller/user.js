const { User } = require('../model')

exports.login = async (req, res, next) => {
  try {
    res.status(200).json({
      ...req.json.user,
      token: 111,
    })
  } catch (error) {
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    // 1 获取参数
    const { username, password } = req.body.user || {}
    // 2 数据验证
    if (!username || !password) {
    }
    const user = new User(req.body.user)
    await user.save()
    res.status(201).json({
      user,
    })
  } catch (error) {
    next(error)
  }
}
