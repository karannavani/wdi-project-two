const Post = require('../models/post');

function searchShow(req, res) {
  Post
    .find({$text: {$search: req.body.search}})
    .then(post => {
      console.log(req.body);
      res.render('search/show', {post});
    });
}

module.exports = {
  show: searchShow
};
