const express = require('express');
const router = express.Router();

const userControll = require('../app/controllers/UsersController');
router.post('/store', userControll.store);
router.get('/register', userControll.register);
router.post('/login', userControll.checklogin);
router.get('/', userControll.login);


module.exports = router;