const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  subtitle: {type: String},
  author: {type: String},
  date: {type: String},
  coverPic: {type: String},
  content: {type: String, required: true},
  tags: [{type: String}],
  comments: [{ name: String, content: String }]
});


module.exports = mongoose.model('Post', postSchema);
