
const express = require("express");
const router = express.Router();
const User = require("../../models/user");
// const multer = require("multer");
// const fs = require("fs");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

router.post("/",  async (req, res) => {
  const { userId } = req;
  const { username } = req.body;

  // if (!req.file) {

    let findUser = await User.findById(userId);
    if (!findUser) {
      return res.status(400).send({
        message: "User not found.",
        success: false,
      });
    }else{

      await User.findByIdAndUpdate(userId, { username });
      return res.status(200).send({
        message: "Profile updated successfully.",
        success: true,
      });
    }
    
  // }

  // try {
  
  //     await fs.unlink(req.file.path, (err) => {
  //       if (err) {
  //         console.error("Error deleting file:", err);
  //       } else {
  //         console.log("File deleted successfully");
  //       }
  //     });
   
  // } catch (error) {
  //   return res.status(500).send({
  //     message: "Failed to update profile.",
  //     error: error,
  //     success: false,
  //   });
  // }
});
module.exports = router;
