const express = require('express');
const router = express.Router();
const Board = require('../../models/board');

router.get('/:workspaceId', (req, res) => {
    const {workspaceId} = req.params;
    const {userId} = req;
    Board.find({
        workspaceId: { $eq: workspaceId },
        boardStatus: { $ne: false },
    })
        .populate('boardMember.b_memberid', ['username', 'email'])
        .populate('createdBy', 'username')
        .then(boards => {
            const allboard = [];
            let count = 0;
            if (boards.length > 0) {
                for (let i = 0; i < boards.length; i++) {
                    const member = boards[i].boardMember;
                    let flag = 0;
                    for (let j = 0; j < member.length; j++) {
                        if (member[j] && String(member[j]?.b_memberid?._id) === userId) {
                            if (member[j].memberStatus === true) {
                                flag = 1;
                            }
                        }
                    }
                    if (flag == 1) {
                        allboard.push({
                            boardColor: boards[i].boardColor,
                            boardLabels: boards[i].boardLabels,
                            boardMember: boards[i].boardMember,
                            boardName: boards[i].boardName,
                            boardStatus: boards[i].boardStatus,
                            workspaceId: boards[i].workspaceId,
                            _id: boards[i]._id,
                            createdBy: boards[i]?.createdBy?._id,
                            createdByName: boards[i]?.createdBy?.username,
                            createdAt: boards[i].createdAt,
                        });
                    }
                    count++;
                    if (count === boards.length) {
                        res.status(201).json({ success: true, allboards: allboard });
                    }
                }
            } else {
                res.status(201).json({ success: true, allboards: boards });
            }
        })
        .catch(error => {
            res.status(201).json({
                success: false,
                message: 'Failed to fetch all boards.',
                error,
            });
        });
});

module.exports = router;
