const User = require('../models/user');
let user;

// function usersShow(req, res) {
//
//   res.render('users/show');
// }

// function usersShow(req, res) {
//   User
//     .findById(req.params.userId)
//     .then(user => {
//       return Post
//         .find({})
//         .then(posts => {
//           user.stories = [];
//           user.storyLinks = [];
//           posts.forEach(post => {
//             if (post.author.toString() === req.params.userId.toString() ) {
//               user.stories.push(post.title);
//               user.storyLinks.push(post.id);
//             }
//           });
//           console.log('titles are here ===>', user.stories);
//           res.render('users/show', {user});
//         });
//     });
// }

function usersShow(req, res) {
  User
    .findById(req.params.userId)
    .then(_user => {
      user = _user;
      return user.postsAuthored();
    })
    .then(postsAuthored => {
      res.render('users/show', {user, postsAuthored});
    });
}


module.exports = {
  show: usersShow
};
