const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Post = require('../models/post');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  profilePic: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.methods.postsAuthored = function() {
  return Post.find({ author: this.id});
};

userSchema.pre('validate', function(next) {
  if (this._passwordConfirmation !== this.password) {
    console.log('Passwords did not match');
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.post('validate', function() {
  console.log('Post-validate hook has happened');
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
  console.log('Pre-save hook has happened');
});

module.exports = mongoose.model('User', userSchema);
