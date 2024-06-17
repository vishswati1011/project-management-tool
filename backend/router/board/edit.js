const express = require('express');
const router = express.Router();
const Board = require('../../models/board');


router.post('/:boardId', (req, res) => {
    const boardId = req.params.boardId;
    const boards = req.body;

    Board.updateOne({ _id: boardId }, { $set: boards })
        .then(board => {
            if (board.acknowledged) {
                res.status(201).json({ success: true, message: 'Board updated.' });
            } else {
                res.status(400).json({ success: false, message: 'Failed to update board.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({
                success: false,
                message: 'Failed to update board.',
                error,
            });
        });
});

module.exports = router;