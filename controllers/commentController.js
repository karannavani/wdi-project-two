const Post = require('../models/post');

function commentsCreate(req ,res) {
  Post
    .findById(req.params.postId)
    .then(post => {
      post.comments.push(req.body);
      return post.save();
    })
    .then(post => res.redirect(`/posts/${post.id}`))
    .catch(err => console.log(err));
}

function commentsDelete(req, res, next) {
  Post
    .findById(req.params.postId)
    .then(post => {
      post.comments = post.comments.filter(
        comment => comment.id !== req.params.commentId
      );
      return post.save();
    })
    .then(post => res.redirect(`/posts/${post.id}`))
    .catch(next);
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
