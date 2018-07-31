const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  subtitle: {type: String},
  author: {type: mongoose.Schema.ObjectId, ref: 'User'},
  date: { type: String },
  coverPic: { type: String },
  content: { type: String, required: true },
  tags: [{ type: String }],
  comments: [{ createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}, content: String }],
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

postSchema.index({'$**': 'text'});


module.exports = mongoose.model('Post', postSchema);
