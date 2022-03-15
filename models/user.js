const mongoose = require('mongoose');

const uuidv1 = require('uuidv1');

const crypto = require('crypto');



const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    salt: String,

}, { timestamps: true });



module.exports = mongoose.model('User', userSchema);


