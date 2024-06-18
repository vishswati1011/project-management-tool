const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const { hashPassword } = require("../../middleware/authPassword");
const { generateCode } = require("../../middleware/generateCode");

router.post("/", async (req, res) => {

  let { organizationId } = req;

  let { email, username ,phone} = req.body;
 
  const passcode = generateCode();
  const encrypted = hashPassword(passcode);

  const createdAt = new Date();
  const lastLogin = new Date();
  const user = {
    email,
    username,
    phone,
    password: encrypted,
    passcode,
    createdAt,
    lastLogin,
    organizationId
  };
  let newUser = new User(user);
  newUser.save().then((data)=>{
    res.status(201).json({
      success: true,
      message: "User added.",
    });
  }).catch((err)=>{
    res.status(400).json({
      success: false,
      message: "Failed to add user.",
      error: err,
    });
  });


 
});
module.exports = router;
