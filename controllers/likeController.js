const Post = require('../models/post');

function likeCreate(req, res) {
  console.log(req.session.id);
  Post
    .findById(req.params.id)
    .then(post => {
      post.likes.push(req.session.userId);
      return post.save();
    })

    .then(() => res.redirect(`/posts/${req.params.id}`))
    .catch(err => res.status(500).send(err));
}


module.exports = {
  create: likeCreate
};
