const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({email: req.body.email})
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', {message: 'Incorrect password or email id, please try again'});
      } else {
        req.session.userId = user.id;
        res.redirect('/posts');
      }
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
