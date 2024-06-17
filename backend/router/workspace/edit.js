const express = require('express');
const router = express.Router();
const Workspace = require('../../models/workspace');
const ObjectId = require('mongodb').ObjectId;

router.post('/:workspaceId', (req, res) => {
    
    const workspaceId = req.params.workspaceId;
    const workspaces = req.body;

    return Workspace.updateOne(
        { _id: new ObjectId(workspaceId) },
        { $set: { ...workspaces, updatedAt: new Date() } }
    )
        .then(async workspace => {
            if (workspace.acknowledged) {
                const updatedWorkspace = await Workspace.findById(workspaceId).populate("createdBy",'username');
                const response = {
                    workspaceId: updatedWorkspace._id,
                    workspaceName: updatedWorkspace.workspaceName,
                    createdBy: updatedWorkspace.createdBy._id,
                    createdByName:updatedWorkspace.createdBy.username,
                    updatedAt: updatedWorkspace.updatedAt,
                    createdAt: updatedWorkspace.createdAt,
                    workspaceMember:updatedWorkspace.workspaceMember
                    };

                res.status(201).json({
                    success: true,
                    message: 'workspace updated.',
                    data: response,
                });
            } else {
                res.status(400).json({ success: false, message: 'Failed to update.' });
            }
        })
        .catch(error => {
            res.status(400).json({
                success: false,
                message: 'Failed to update.',
                error,
            });
        });
});

module.exports = router;
