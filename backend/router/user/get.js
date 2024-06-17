
const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/", async (req, res) => {
  const { userId } = req;

  let findUser = await User.findById(userId);
  if (findUser) {
    res.status(200).json({
      success: true,
      message: "User found.",
      data: findUser,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to get user.",
    });
  }
 
});
module.exports = router;
