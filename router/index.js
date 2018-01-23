const router    = require('./instance')

const user = require('./user.router')


router.use('/api/user', user.routes(), user.allowedMethods())

module.exports = router
