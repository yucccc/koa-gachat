const router    = require('./instance')

const connection    = require('./../db/db.config')
const query         = require('../common/resdata')
const resMsg        = require('../common/resmsg')
const {SUC, ERR, LACK, EMPTY, PARAMETER_ERR, EXIST}  = require('./../common/errcode')
const md5           = require('md5')


/***
 * 登陆
 *
 */


router.post('/login', async (ctx) => {
    // 这里可以同步获取到data
    let rows = await query('select * from im_user')
    ctx.body = data
})


/***
 * 注册账号
 * mobile: number
 * password: string
 * nickName: string
 *
 */

router.post('/register' , async (ctx) => {
    const {mobile, password, nickName} = ctx.request.body
    if (mobile && password && nickName) {
        // 查询尬聊号
        const mobileSql = `select mobile from im_user where mobile = ${mobile}`
        try {
            // 检验参数类型
            if (!(+mobile) || mobile.length > 10) return ctx.body = resMsg(PARAMETER_ERR)
            // 验证手机手机是否存在
            const mobileData = await query(mobileSql)
            if (mobileData.length) {
                ctx.body = resMsg(EXIST, '尬聊号已经存在')
            } else {
                // 写入数据库
                const insertSql = `insert into im_user set mobile=?,password=?,nickName=?;`
                await query(insertSql,[mobile,md5(password),nickName])

                ctx.body = resMsg(SUC, '注册成功')
            }
        } catch (err) {
            ctx.body = resMsg(ERR, err.message)
        }


    } else {
        ctx.body = resMsg(LACK)
    }

})







module.exports = router