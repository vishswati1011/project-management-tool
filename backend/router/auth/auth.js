
const express = require("express");
const router = express.Router();

// this all routes is used to signup login otp forget for user
router.use("/signup", require("./signup"));
router.use("/login", require("./login"));
router.use('/organization',require('./organization'));

module.exports = router;