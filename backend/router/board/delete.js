var express = require('express');
var router = express.Router();
const Board = require('../../models/board');

router.delete('/:boardId', async (req, res) => {
    try {
        const { userId } = req;
        const { boardId } = req.params;
        const board = await Board.findOne({
            _id: boardId
        },{creadtedBy:1});
        if (board.creadtedBy === userId) {
            const deletedBoard = await Board.findOneAndDelete({ _id: boardId });
            if (deletedBoard) {
                res.status(200).json({ message: 'board permanently deleted' });
            }
        } else {

            const deletedBoard = await Board.findOneAndUpdate(
                { _id: boardId },
                {
                  $pull: {
                    'boardMember': { b_memberid: userId }
                  }
                },
                { new: true } // To return the updated document
              );
            if (deletedBoard) {
                res.status(200).json({ message: 'board permanently deleted' });
            }
        }
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router;
