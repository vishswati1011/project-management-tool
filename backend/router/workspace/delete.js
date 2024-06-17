var express = require('express');
var router = express.Router();
const Workspace = require('../../models/workspace');

router.delete('/:workspaceId', async (req, res) => {
    try {
        const { userId } = req;
        const { workspaceId } = req.params;
        const workspace = await Workspace.findOne({
            _id: workspaceId
        },{creadtedBy:1});
        if (workspace.creadtedBy === userId) {
            const deletedWorkspace = await Workspace.findOneAndDelete({ _id: workspaceId });
            if (deletedWorkspace) {
                res.status(200).json({ message: 'Workspace permanently deleted' });
            }
        } else {

            const deletedWorkspace = await Workspace.findOneAndUpdate(
                { _id: workspaceId },
                {
                  $pull: {
                    'workspaceMember': { w_memberid: userId }
                  }
                },
                { new: true } // To return the updated document
              );
            if (deletedWorkspace) {
                res.status(200).json({ message: 'Workspace permanently deleted' });
            }
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router;
