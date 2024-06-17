const mongoose = require('mongoose');

const User = mongoose.Schema({

    email : String,
    username : String,
    password : String,
    phone : String,
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
    },
},{
    timestamps:true
});

module.exports = mongoose.model('users', User);