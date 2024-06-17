const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const { compareHashPassword } = require("../../middleware/authPassword");

router.post("/", async (req, res) => {
  let { email, password } = req.body;

  try {
    let findUser = await User.findOne({ email: email });
    if (!findUser) {
      res.status(500).json({ message: "Invalid Credentials.", success: false });
    } else {
      console.log(findUser, "login user");
      let hashedPassword = await compareHashPassword(
        password,
        findUser.password
      );
      if (hashedPassword) {
        const savedUser = await User.findById(findUser._id).populate(
          "organizationId"
        );

        const user = {
          username: savedUser.username,
          _id: savedUser._id,
          email: savedUser.email,
          organizationId: savedUser.organizationId?._id,
          organization: savedUser.organizationId?.organization,
        };

        const token = jwt.sign(user, process.env.SALT);

        res.status(201).json({
          success: true,
          token,
          message: "User logged In!",
          userId: savedUser._id,
          user,
        });
      }
    }
  } catch (error) {
    res.status(201).json({ message: "Sing-up Failed.", success: true });
  }
});

module.exports = router;
