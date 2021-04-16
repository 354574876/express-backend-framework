const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const route = require('./router')
const PORT = process.env.PORT || 3000

// 请求参数处理
app.use(morgan('dev'))
app.use(express.json())
// 跨域
app.use(cors())

// 挂载路由，所有的接口都在api下
app.use('/api', route)

app.listen(PORT, () => {
  console.log(`Serve is running at http://locahost:${PORT}`)
})
