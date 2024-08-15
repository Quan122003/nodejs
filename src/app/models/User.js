const mongoose = require('mongoose');
const { TRUE } = require('node-sass');
// const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, maxLength:255},
    email: {type: String, maxLength: 255}, 
    password: {type: String, maxLength: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
},{
    timestamps: true,
});




module.exports = mongoose.model('User', User);