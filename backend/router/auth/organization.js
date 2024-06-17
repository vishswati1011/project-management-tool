const express = require("express");
const router = express.Router();

const Organization = require("../../models/organization");

router.post("/", async (req, res) => {

  let { organization } = req.body;

  try {
    let findOrganization = await Organization.findOne({ organization });
    if (findOrganization) {
      res
        .status(400)
        .json({ message: "Organization Already Exist", success: false });
    } else {
      let newOrganization = new Organization({ organization });
      let savedOrganization = await newOrganization.save();
      res
        .status(200)
        .json({
          message: "Organization saved successfully",
          success: true,
          organizationId: savedOrganization?._id,
        });
    }
  } catch (error) {}
});

module.exports = router;
