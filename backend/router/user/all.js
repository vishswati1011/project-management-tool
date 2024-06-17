const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/", async (req, res) => {
  
  let {organizationId} = req;

  let findUsers = await User.find({organizationId});
  if(findUsers){
    res.status(200).json({
      success: true,
      message: "All users.",
      data: findUsers,
    });
  }else{
    res.status(400).json({
      success: false,
      message: "Failed to get users.",
    });
  }
});

module.exports = router;
