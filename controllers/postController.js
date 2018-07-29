const Post = require('../models/post');

function postsIndex(req, res) {
  Post
    .find()
    .then(posts => {
      res.render('posts/index', {posts});
    });
}

function postsShow(req, res) {
  Post
    .findById(req.params.id)
    .then(post => res.render('posts/show', {post}));
}

function postsNew(req ,res) {
  res.render('posts/new');
}

function postsCreate(req, res) {
  Post
    .create(req.body)
    .then(() => res.redirect('/posts'))
    .catch(err => res.status(500).send(err));
}

function postsEdit(req, res) {
  Post
    .findById(req.params.id)
    .then(post => res.render('posts/edit', {post}))
    .catch(err => res.status(404).send(err));
}



module.exports = {
  index: postsIndex,
  show: postsShow,
  new: postsNew,
  create: postsCreate,
  edit: postsEdit
};
