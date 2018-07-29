const User = require('../models/user');

function sessionsCreate(req, res) {
  res.render('sessions/new');
}


module.exports = {
  new: sessionsCreate
};
