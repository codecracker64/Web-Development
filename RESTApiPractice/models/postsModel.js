const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:String,
    description:String,
    datePosted:{type:Date,default:Date.now()}
})

const postsModel = mongoose.model('Posts',PostSchema);

module.exports = postsModel;