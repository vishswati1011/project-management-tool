
var express = require('express');
var router = express.Router();
const Board = require('../../models/board.js');
const { boardLabels } = require('../../utilities/constant');

router.post('/', (req, res) => {
    const { boardName, boardColor, boardMember, workspaceId, createdBy } = req.body;
    const { organizationId } = req;
    const boards = {
        boardName,
        boardColor,
        boardMember,
        workspaceId,
        createdBy,
        boardLabels,
        organizationId
    };

    let board = new Board(boards);
    return board
        .save()
        .then(board => {

            Board.findById(board._id)
                .populate('boardMember.b_memberid', ['username', 'email'])
                .populate('createdBy', 'username')
                .then(newboard => {
                    res.status(201).json({
                        success: true,
                        message: 'Board added successfully.',
                        data: newboard,
                        workspaceId: workspaceId,
                    });
                });

        })
        .catch(error => {
            res.status(400).json({
                success: false,
                message: 'Failed to add board.',
                error,
            });
        });
})


module.exports = router;
