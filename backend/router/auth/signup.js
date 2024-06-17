const express = require("express");
const router = express.Router();
const User = require("../../models/user");

const { hashPassword } = require("../../middleware/authPassword");

router.post("/", async (req, res) => {

  let { username, email, password, phone, organizationId } = req.body;
  console.log("req.body",req.body)

  try {
    const findUser = await User.findOne({ email: email })
      if(findUser){
        res.status(400).json({ message: "User Already Exist", success: false });
      } else {
        let hashedPassword = await hashPassword(password);
        let user = {
          username,
          email,
          password: hashedPassword,
          phone,
          organizationId,
        }
        let newUser = new User(user);
        await newUser.save();
        res
          .status(201)
          .json({ message: "User saved successfully", success: true });
      }
  } catch (error) {
    res.status(400).json({ message: "Sing-up Failed.", success: true ,error});
  }
});

module.exports = router;
