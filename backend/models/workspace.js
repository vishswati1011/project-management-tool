const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'organization',
        },
        workspaceName: {
            type: String,
            required: 'workspace Name required',
        },
        workspaceMember: [
            {
                w_memberid: {
                    type: mongoose.Types.ObjectId,
                    ref: 'users',
                },
                memberStatus: {
                    type: Boolean,
                    default: true,
                }
            },
        ],
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        workspaceStatus: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('workspaces', workspaceSchema);
