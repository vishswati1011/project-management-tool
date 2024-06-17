const mongoose = require('mongoose');

const bucketSchema = mongoose.Schema(
    {
        bucketName: {
            type: String,
            required: 'Bucket Name required',
        },
        bucketIndex: {
            type: Number,
        },
        boardId: {
            type: mongoose.Types.ObjectId,
            ref: 'boards',
        },
        cards: [
            {
                createdBy: {
                    type: mongoose.Types.ObjectId,
                    ref: 'users',
                },
                cardActivity: [
                    {
                        content: '',
                        commentDate: '',
                        commentTime: '',
                        type: '',
                        userId: {
                            type: mongoose.Types.ObjectId,
                            ref: 'users',
                        },
                    },
                ],
                logs: [
                    {
                        content: '',
                        commentDate: '',
                        commentTime: '',
                        userId: {
                            type: mongoose.Types.ObjectId,
                            ref: 'users',
                        },
                    },
                ],
                cardTitle: {
                    type: String,
                },
                cardDescription: {
                    type: String,
                },
                cardassignees: [
                    {
                        type: mongoose.Types.ObjectId,
                        ref: 'users',
                    },
                ],
                checklist: [
                    {
                        checklistTitle: '',
                        checklistItem: [
                            {
                                itemTitle: '',
                                itemStatus: false,
                            },
                        ],
                    },
                ],
                checklistCompleted: {
                    type: Number,
                },
                checklistTotal: {
                    type: Number,
                },
                cardDate: {
                    startDate: '',
                    dueDate: '',
                    dueTime: '',
                    status: '',
                },

                attachments: [
                    {
                        attach_url: String,
                        image_name: String,
                    },
                ],
                urls: [
                    {
                        attach_url: String
                    },
                ],
                cardStatus: {
                    type: Boolean,
                    default: true,
                },
                cardMembers: [], //array of string member id
                cardLabel: [], //array of string label id from boards
            },
        ],
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'users',
        },
        bucketStatus: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('buckets', bucketSchema);
