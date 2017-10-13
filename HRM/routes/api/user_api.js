var router = require('koa-router')();

//加载用户controller
var user_controller = require('../../app/controllers/user_controller');

//这里我记得有get,post,put,delete,all等几种方式,不太记得了
router.get('/getUser', user_controller.getUser);
router.post('/registerUser', user_controller.registerUser);

module.exports = router;
