var router = require('koa-router')();
var user_api = require('./user_api');

router.use('/users', user_api.routes(), user_api.allowedMethods());

//将所有路由注册到api下
router.use('/api', router.routes(), router.allowedMethods());

module.exports = router;