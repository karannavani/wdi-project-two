const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const registrationController = require('../controllers/registrationController');

router.get('/', (req, res) => res.render('pages/_home'));

router.get('/registrations/new', registrationController.new);
router.post('/registrations', registrationController.create);

router.route('/posts')
  .get(postController.index)
  .post(postController.create);


router.route('/posts/new')
  .get(postController.new);

router.get('/posts/:id/edit', postController.edit);

router.route('/posts/:id')
  .get(postController.show)
  .put(postController.update)
  .delete(postController.delete);

module.exports = router;
