const mysql = require('mysql')

const pool = mysql.createPool({
    host:       'localhost',    // 数据库地址
    user:       'bbb',          // 用户名
    password:   '123456',       // 密码
    database:   'chat'          // 选中数据库
})



module.exports = pool