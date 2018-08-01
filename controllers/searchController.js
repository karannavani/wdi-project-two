const Post = require('../models/post');

function searchIndex(req, res) {
  Post
    .find({$text: {$search: req.body.search}})
    .populate('author')
    .then(post => {
      console.log(req.body);
      res.render('search/index', {post});
    });
}

module.exports = {
  index: searchIndex
};
