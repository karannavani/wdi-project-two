const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You need to be logged in to be able to do that');
      res.redirect('/sessions/new');
    });
  }
  return next();
}

router.get('/', (req, res) => res.redirect('/posts'));

router.get('/registrations/new', registrationController.new);
router.post('/registrations', registrationController.create);

router.get('/sessions/new', sessionController.new);
router.post('/sessions', sessionController.create);
router.get('/sessions/delete', sessionController.delete);

router.route('/posts')
  .get(postController.index)
  .post(postController.create);


router.route('/posts/new')
  .get(secureRoute, postController.new);

router.get('/posts/:id/edit', postController.edit);

router.route('/posts/:id')
  .get(postController.show)
  .put(postController.update)
  .delete(secureRoute, postController.delete);

module.exports = router;
