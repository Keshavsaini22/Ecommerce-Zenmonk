const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },

    email: { unique: true, type: String },
    password: String,
    role: String

})

module.exports = mongoose.model("users", UsersSchema)