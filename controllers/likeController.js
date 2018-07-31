const Post = require('../models/post');

function likeCreate(req, res) {
  Post
    .findById(req.params.id)
    .then(post => {
      post.likes.push(req.session.userId);
      return post.save();
    })

    .then(() => res.redirect(`/posts/${req.params.id}`))
    .catch(err => res.status(500).send(err));
}

function likeDelete(req, res, next) {
  Post
    .findById(req.params.id)
    .then(post => {
      post.likes = post.likes.filter(like => like.toString() !== req.session.userId);
      return post.save();
    })
    .then(() => res.redirect(`/posts/${req.params.id}`))
    .catch(next);
}


module.exports = {
  create: likeCreate,
  delete: likeDelete
};
