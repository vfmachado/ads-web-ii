const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nickname : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phone : {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;