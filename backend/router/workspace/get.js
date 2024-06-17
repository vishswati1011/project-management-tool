const express = require('express');
const router = express.Router();
const Workspace = require('../../models/workspace');

router.get('/', (req, res) => {
    const { userId } = req;
    Workspace.find({
        createdBy: userId,
        'workspaceMember.w_memberid': userId,
        'workspaceMember.memberStatus': true,
        workspaceStatus: true,
    })
        .populate('createdBy', 'username')
        .then(workspaces => {
            Workspace.find({
                createdBy: { $ne: (userId) },
                'workspaceMember.w_memberid': (userId),
                'workspaceMember.memberStatus':true,
                workspaceStatus:true,
            })
                .populate('createdBy', 'username')
                .then(async guest => {
                    res.status(201).json({
                        success: true,
                        allWorkspaces: workspaces,
                        allguestWorkspace: guest,
                    });
                })
                .catch(error => {
                    console.error(error);
                    res.status(400).json({ success: false, message: 'Failed to get workspaces.' });
                });
        })
        .catch(error => {
            res.status(400).json({
                success: false,
                message: 'Failed to get workspaces.',
                error,
            });
        });
});

module.exports = router;
