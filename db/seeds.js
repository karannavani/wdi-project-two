const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/echo');

const date = new Date().toLocaleDateString('en-us', { month: 'short', day: '2-digit'});

const Post = require('../models/post');

Post.collection.drop();

Post
  .create([
    {
      title: 'How Climate Change Is Ruining Our Indoor Air',
      subtitle: 'It would take an unreasonable amount of plants to balance rising CO2 levels being found at home, school, and work',
      author: 'Karan',
      date: `${date}`,
      coverPic: 'https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393_1280.jpg',
      content: 'What is the most important number in the world? Bill McKibben thinks it is 350. The environmental activist co-founded 350.org, a climate advocacy group, as a way to popularize the finding of a 2008 paper: CO2 in the atmosphere will need to be reduced to at most 350 parts per million “if humanity wishes to preserve a planet similar to that on which civilization developed…” We were at around 280 ppm before we began to burn coal, oil, and gas en masse. This April, we reached 410 ppm. Yet it is a little appreciated fact that many of us at home, school, and work breathe air containing CO2 concentrations of 1,000 ppm every day. It is because the air we exhale holds around a hundred times more CO2 — about 40,000 ppm — than the air we inhale. Badly ventilated classrooms and overcrowded conference rooms can reach 2,000 ppm, well above the point when air starts to feel “stuffy,” at 600 ppm. Concentrations above that can cause classic symptoms of CO2 poisoning: labored breathing, headaches, rapid pulse rate, hearing loss, hyperventilation, sweating, and fatigue. Scientists like William Fisk, who studies the relationship between human health and performance and indoor-air quality at Lawrence Berkeley National Laboratory, worry that long-term exposures to these conditions could be toxic. Even at lower levels, the effect appears to still be strong enough to influence whether kids make it to school.',
      tags: ['test tag', 'another one']
    },

    {
      title: 'Test Post Again',
      subtitle: 'Another subtitle',
      author: 'Steve Jobs',
      date: `${date}`,
      coverPic: 'https://images.pexels.com/photos/408951/pexels-photo-408951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      content: 'This is some content',
      tags: ['test tag', 'another one']
    },

    {
      title: 'Another Test Post',
      subtitle: 'Lovely',
      author: 'Elon Musk',
      date: `${date}`,
      coverPic: 'https://images.pexels.com/photos/1096658/pexels-photo-1096658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      content: 'This is some content',
      tags: ['test tag', 'another one']
    }

  ])
  .then(posts => console.log(`Created ${posts.length} posts`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
