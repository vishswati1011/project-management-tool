
const express = require("express");
const router = express.Router();
const {verifyToken} = require("../../middleware/verifyJwtToken");

router.use("/add",verifyToken,require("./add"));
// this api is used to get user
router.use("/all", verifyToken,require('./all'));
// this api is used to delete user 
router.use("/delete",verifyToken,require('./delete'));
// used to delete user parmanent
// this api is used to update user profile
router.use("/update",verifyToken,require('./update'));
router.use("/get",verifyToken,require('./get'));

module.exports = router;