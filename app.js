const Koa           = require('koa')
const app           = new Koa()
const bodyParser    = require('koa-bodyparser')
const io            = require('socket.io')(app)
const koaLogger     = require('koa-logger')
const {port}        = require('./common/config')

const router        = require('./router')

// 控制台日志中间件
app.use(koaLogger())
// 解析请求参数
app.use(bodyParser())
// 路由中间件
app.use(router.routes(), router.allowedMethods())





app.listen(port, () => {
    console.log(`服务启动于: http://localhost:${port}`);
})