const User = require('../models/user');

function registrationsNew(req, res) {
  res.render('registrations/new');
}

function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then(user => {
      req.session.userId = user.id;
      res.redirect('/posts');
    })
    .catch(() => res.status(500).redirect('/registrations/new'));
}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
