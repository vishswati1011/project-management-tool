const express = require('express');
const router = express.Router();

const  {verifyToken} = require('../../middleware/verifyJwtToken');

router.use('/add',verifyToken,require('./add'));
router.use('/delete',verifyToken,require('./delete'));
router.use('/get',verifyToken,require('./get'));
router.use('/update',verifyToken,require('./edit'));

module.exports = router;