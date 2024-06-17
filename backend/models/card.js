const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    boardId: {
        type: mongoose.Types.ObjectId,
        ref: 'boards',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
    },
    comments: [
        {
            comment: String,
            date: {
                type: Date,
                default: Date.now,
            },
            username: {
                type: mongoose.Types.ObjectId,
                ref: 'Users',
            },
        },
    ],
    cardTitle: {
        type: String,
    },
    description: {
        type: String,
    },
    taskassignees: [{ memberid: { type: mongoose.Types.ObjectId, ref: 'Users' } }],
    rank: {
        type: Number,
        required: 'Rank Required',
    },
    bucketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buckets',
    },
    checklist: { type: Array, default: [] },
    start_date: {
        type: Date,
    },
    due_date: {
        type: Date,
    },
    progress: {
        type: String,
    },
    label_color: {
        type: String,
    },
    priority: {
        type: String,
    },
    attachments: [String],
},{
    timestamps:true
});
module.exports = mongoose.model('cards', cardSchema);
