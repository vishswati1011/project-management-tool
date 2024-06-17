const express = require("express");
const router = express.Router();
const Workspace = require("../../models/workspace");

router.post("/", async (req, res) => {
  const { workspaceName, workspaceMember, createdBy } = req.body;
  const { organizationId } = req;

  const workspaces = {
    workspaceName,
    workspaceMember,
    createdBy,
    createdAt: new Date(),
    updatedAt: new Date(),
    organizationId,
  };

  let newWorkspace = new Workspace(workspaces);
  let saved = await newWorkspace.save();

  if (saved) {
    res.status(201).json({
      success: true,
      message: "Workspace added successfully.",
      workspaces: saved,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to add workspace.",
      error: err,
    });
  }
});

module.exports = router;
