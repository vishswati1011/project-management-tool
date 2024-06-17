const mongoose = require("mongoose");

const Organization = mongoose.Schema({
    organization:String,
})
module.exports = mongoose.model("organization", Organization);