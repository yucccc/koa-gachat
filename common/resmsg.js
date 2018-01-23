const {errCode} = require('./errcode')

const resData = (code = 0, msg = errCode[code], data = {}) => {
    return {code, msg, data}
}

module.exports = resData