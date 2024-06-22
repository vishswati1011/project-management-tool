const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.delete("/:userId", async (req, res) => {

  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (user) {
      const deletedUser = await User.findOneAndDelete({ _id: userId });
      if (deletedUser) {
        res.status(200).json({ message: "User permanently deleted." ,success : true });
      }
    } else {
      res.status(400).json({ message: "User not found.",success:false });
    }

  } catch (error) {
    res.status(400).json({ message: "failed to delete user." , success :false });
  }
});
module.exports = router;
