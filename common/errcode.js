// 错误码
const
    SUC     = 0,        // 成功
    ERR     = 1,        // 服务端出错
    LACK    = 2,        // 缺少必要参数
    EMPTY   = 3,        // 找不到对应信息
    PARAMETER_ERR   = 4,    // 参数错误
    EXIST   = 5;        // 数据已存在

// 错误信息
const errCode = {
    [SUC]:          '请求成功',
    [ERR]:          '服务端出错',
    [LACK]:         '缺少必要参数',
    [EMPTY]:        '未找到对应信息',
    [PARAMETER_ERR]:    '请求参数错误',
    [EXIST]:        '数据已存在'
}

module.exports = {
    errCode,
    SUC,
    ERR,
    LACK,
    EMPTY,
    PARAMETER_ERR,
    EXIST
}

