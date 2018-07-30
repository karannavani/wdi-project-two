const Post = require('../models/post');

function commentsCreate(req ,res) {
  Post
    .findById(req.params.albumId)
    .then(post => {
      post.comments.push(req.body);
      return post.save();
    })
    .then(post => res.redirect(`/posts/${post.id}`))
    .catch(err => console.log(err));

}

module.exports = {
  new: commentsCreate
};
