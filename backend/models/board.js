const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'organization',
        },
        boardName: {
            type: String,
            required: 'board Name required',
        },
        boardMember: [
            {
                b_memberid: { type: mongoose.Types.ObjectId, ref: 'users' },
                memberStatus: {
                    type: Boolean,
                    default: true,
                },
                starred: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
        workspaceId: {
            type: mongoose.Types.ObjectId,
            ref: 'workspaces',
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
        },
        boardStatus: {
            type: Boolean,
            default: true,
        },
        boardLabels: [
            {
                labelTitle: String,
                labelColor: String,
                labelBackgroundColor: String,
            },
        ]
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('boards', boardSchema);
