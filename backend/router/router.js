const express = require('express');
const router = express.Router();

router.use('/workspace', require('./workspace/workspace'));
router.use('/auth', require('./auth/auth'));
router.use('/board', require('./board/board'));
router.use('/user', require('./user/user'));


module.exports = router;