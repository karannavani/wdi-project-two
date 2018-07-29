const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', (req, res) => res.render('pages/_home'));

router.route('/posts')
  .get(postController.index);


module.exports = router;
