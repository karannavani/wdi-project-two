const Post = require('../models/post');

function postsIndex(req, res) {
  Post
    .find()
    .then(posts => {
      res.render('posts/index', {posts});
    });
}



module.exports = {
  index: postsIndex
};
