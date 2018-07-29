const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/echo');

let date;

function createDate() {
  const dateArr = Object.entries(Date());
  const day = dateArr[4][1] + dateArr[5][1] + dateArr[6][1];
  date = day + ' ' + new Date().getDate();
}

createDate();

const Post = require('../models/post');

Post.collection.drop();

Post
  .create([
    {
      title: 'Test Post',
      subtitle: 'Lala',
      author: 'Karan Navani',
      date: `${date}`,
      coverPic: 'https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_1280.jpg',
      content: 'This is some content'
    }

  ])
  .then(posts => console.log(`Created ${posts.length} posts`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
