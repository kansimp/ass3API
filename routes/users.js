var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');

/* GET users listing. */
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/changeInfo', userController.changeInfoUser);
router.put('/changePass', userController.changePassUser);

module.exports = router;
