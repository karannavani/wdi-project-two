const Post = require('../models/post');

function postsIndex(req, res) {
  Post
    .find()
    .then(posts => {
      res.render('posts/index', {posts});
    });
}

function postsShow(req, res) {
  const postId = req.params.id;
  Post
    .findById(postId)
    .then(post => res.render('posts/show', {post}));
}




module.exports = {
  index: postsIndex,
  show: postsShow
};
