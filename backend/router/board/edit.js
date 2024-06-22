const express = require('express');
const router = express.Router();
const Board = require('../../models/board');

router.post('/', (req, res) => {
    const {boardName,boardId} = req.body;
    let data = {
        boardName,
        updateAt: new Date()
    }
    Board.updateOne({ _id: boardId }, { $set: data })
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