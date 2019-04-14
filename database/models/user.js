const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Models
const DateSchema = new Schema({
    day: Number,
    month: Number,
    year: Number
});

const PostSchema = new Schema({
    post:String,
    date:Date
});

const CommentSchema = new Schema({
    comment:String,
    date:Date
})

const UserSchema = new Schema({
    familyname: String,
    name: String,
    email: String,
    password: String,
    birthday: DateSchema,
    post:[PostSchema],
    comment: [CommentSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;