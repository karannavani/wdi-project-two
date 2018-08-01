const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/echo');

const date = new Date().toLocaleDateString('en-us', { month: 'short', day: '2-digit', year: 'numeric'});

const Post = require('../models/post');
const User = require('../models/user');

Post.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'Karan Navani',
    email: 'iamkarannavani@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    username: 'John Cena',
    email: 'youcant@see.me',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    username: 'Steve Jobs',
    email: 'steve@apple.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    username: 'Warren Buffett',
    email: 'warren@buffett.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
  ])

  .then(users => {

    return Post
      .create([
        {
          title: '7 Things I Learned At IBM',
          subtitle: 'I hit a milestone recently, I completed my first 3 months at IBM, experiencing life as a full time employee. It’s been an eventful journey, to say the least.',
          author: users[0].id,
          date: `${date}`,
          coverPic: 'https://i2.wp.com/trappedinkaran.com/blog/wp-content/uploads/2017/10/Blog-25-e1507924288381.png?w=1899&ssl=1',
          content: 'I hit a milestone recently, I completed my first 3 months at IBM, experiencing life as a full time employee. It’s been an eventful journey, to say the least. This is an especially big deal for me because I never imagined myself working at a tech company with such a rich history of innovation and business dominance. I am super-fortunate to be working in a field where the surface is only beginning to get scratched. As part of the Watson Internet of Things (IoT) team, I get to see and work on a lot of cool projects and initiatives that I never knew were even possible! To sum up, my job makes the little futurist in me very happy. Ok, so why am I telling you all this? Well, working in my team is very much like working in a startup. We don’t work 9-5 and we move fast. All of this translates into a lot of work, but it also equates to learning…on steroids. In this post, I want to share some of those steroid infused insights that help me everyday.As an intern, when you join the workplace and are surrounded by people with years and years of experience, it can be intimidating. When I started going for meetings, I didn’t know if I should speak up when I had an opinion. I felt out of place. “Hmm, I don’t know, these guys seem pretty serious and know their stuff…” and I’d stay shut. Until this one meeting where we started discussing how we cater to the new millennial market. I took the opportunity to offer my insight and understand and people actually liked it! That changed things for me. I started offering more insight whenever relevant and it turns out that people really do appreciate input if you are adding value to the conversation. I learned that if you always view yourself as an “intern”, that’s what everyone else will do as well. But the minute you start looking at yourself as a contributor to the team and business, your mentality will make you more confident and allow you to think and speak more effectively.',
          tags: ['IBM', 'Placement', 'Student']
        },

        {
          title: 'Why Your Face Is The Future',
          subtitle: 'Apple made a bold move with the iPhone X and decided that our face is going to be the key to everything.',
          author: users[2].id,
          date: `${date}`,
          coverPic: 'https://i2.wp.com/trappedinkaran.com/blog/wp-content/uploads/2017/11/Blog-34-1763122975-1510653300850.png?w=1941&ssl=1',
          content: 'I got the iPhone X recently which is a pretty cool device. In many ways, it changes and reimagines human-device interaction. I will jump deeper into that in another post, for now I want to dedicate this post to a particular feature that has my imagination running wild – Face ID. Apple made a bold move with the iPhone X and decided that our face is going to be the key to everything. Let’s face it (pun intended), facial recognition is not new technology and Apple is definitely not first to the party. Android has executed this in the past, albeit, the efficacy of that is up for debate. But Apple prides itself in its “We don’t want to be the first, we want to be the best” philosophy. Does it actually improve upon the status quo though? Not yet. But it is going to change everything, in a significant way. Let me tell you why. My experience with Face ID has been good but not flawless. Don’t get me wrong, it is incredibly impressive, but it is not Touch ID impressive. Touch ID kicked off a movement, it made biometrics “cool”. People started to become more comfortable with the idea of using biometrics for consumer-related functionalities, instead of the traditional scenarios where you would use it for official purposes. Touch ID was not perfect when it came out, but Apple learned and improved quickly. The difference between good technology and great technology is how much you notice it. Great technologies are invisible and so frictionless that you don’t consciously process them. Touch ID excelled at that. It was so effective that Apple had to slow down its speed, because it ended up unlocking devices when people only wanted to check the time on the lock screen. Now Apple is starting the Touch ID movement all over again with something much more interesting – your visage. It is making mainstream facial recognition less creepy and that is a significant step towards something big.',
          tags: ['iPhone', 'Apple']
        },

        {
          title: 'I Tried Running A Hedge Fund',
          subtitle: 'The numbers were decent and I was enjoying myself, but eventually I decided to move on.',
          author: users[3].id,
          date: `${date}`,
          coverPic: 'https://i0.wp.com/trappedinkaran.com/blog/wp-content/uploads/2018/01/Paper.Blog_.1.png?w=1911&ssl=1',
          content: 'It was February 2017. Warren Buffett’s new documentary had just come out, there was no way I was going to miss that. Apart from the golden nuggets of wisdom he kept dropping throughout the film, I picked up on something else. When Warren began digging deep into financial analysis and started investing in the market – his family came to him and decided to let him handle their surplus money. This is one of the ways in which he made his start, by managing a pool of finance from people close to him. I paused right after that scene, turned to my girlfriend who was nice enough to not doze off during the documentary, and said “I can do this!”I had started investing in stocks in the first year of my university. I spent lectures monitoring the markets and reading about what companies were up to. A little over a year later I was doing decent, making annual returns in the range of 33-38% (higher than the industry average). My friends knew that I traded stocks and had expressed interest in the past to get into it, but not much came of it. The big issue is that students don’t generally have a lot of knowledge about trading and neither do they know where/how to begin. Not to mention, the risks involved in going solo. Now, I find myself paused at the documentary, my girlfriend looking at me innocently confused, it all came together! I could use my experience and extend that to other students who wanted to get involved in the market, without all the barriers they’d been facing (or some that just wanted to stash their savings).',
          tags: ['hedge fund', 'invest', 'shares']
        },

        {
          title: 'We Need A New Social Network',
          subtitle: 'Social networks – a simple, yet, revolutionary concept. Many have come and gone but only a few have stuck.',
          author: users[0].id,
          date: `${date}`,
          coverPic: 'https://i0.wp.com/trappedinkaran.com/blog/wp-content/uploads/2017/08/FullSizeRender.jpg?w=1987&ssl=1',
          content: 'Social networks – a simple, yet, revolutionary concept. Many have come and gone but only a few have stuck. There have undoubtedly been functionally superior products to Facebook, Twitter and the like, however, they rarely get to see the light of day. Why is that? If reading Nir Eyal’s ‘Hooked’ has taught me anything, I would say the answer is… our primitive brain. As much as we pride ourselves in being an intelligent species, we are not all that logical. Our brains primarily rely on heuristics, biases & emotions to form judgements. Humans are exceptionally gifted at developing routines and habits. We inherently dislike change – thinking requires effort and it can be taxing in terms of resources. This is known as path dependency. The truth is, developing a better social network is not the hard part; the problem lies in getting people to make a mentally taxing effort to even consider an alternative. This is why we are ‘locked in’ to the limited number of services that are prevalent.But this ‘lock in’ has a cost in the form of stagnation. Inspect your Facebook feeds, for example. You will notice that it is not about connecting with your friends anymore. Rather, the focus is on serving you content so that you can be ‘monetised’ or it is just a stream of memes and jokes where we mindlessly tag our friends. Consumption is no longer active, rather, it is something we do on autopilot because we are stuck in a notorious loop. Twitter, too, has been having its own unique problems with trolls, political correctness and more. On the other hand, micro-platforms such as Instagram, Snapchat and Pinterest are thriving. Why? It’s because they allow for a deeper connection which is no longer found on the gigantic platforms. These micro networks are easier to digest and excel at very few specific things and that is what makes them attractive.',
          tags: ['Facebook', 'Instagram', 'Snapchat']
        },

        {
          title: 'Sales Is About Giving A Crap',
          subtitle: 'Our mindset needs to change. We need to start caring again. When did that go out of trend?',
          author: users[0].id,
          date: `${date}`,
          coverPic: 'https://i2.wp.com/trappedinkaran.com/blog/wp-content/uploads/2018/02/Paper.Blog_.41.png?w=2048&ssl=1',
          content: 'Social networks – a simple, yet, revolutionary concept. Many have come and gone but only a few have stuck. There have undoubtedly been functionally superior products to Facebook, Twitter and the like, however, they rarely get to see the light of day. Why is that? If reading Nir Eyal’s ‘Hooked’ has taught me anything, I would say the answer is… our primitive brain. As much as we pride ourselves in being an intelligent species, we are not all that logical. Our brains primarily rely on heuristics, biases & emotions to form judgements. Humans are exceptionally gifted at developing routines and habits. We inherently dislike change – thinking requires effort and it can be taxing in terms of resources. This is known as path dependency. The truth is, developing a better social network is not the hard part; the problem lies in getting people to make a mentally taxing effort to even consider an alternative. This is why we are ‘locked in’ to the limited number of services that are prevalent.But this ‘lock in’ has a cost in the form of stagnation. Inspect your Facebook feeds, for example. You will notice that it is not about connecting with your friends anymore. Rather, the focus is on serving you content so that you can be ‘monetised’ or it is just a stream of memes and jokes where we mindlessly tag our friends. Consumption is no longer active, rather, it is something we do on autopilot because we are stuck in a notorious loop. Twitter, too, has been having its own unique problems with trolls, political correctness and more. On the other hand, micro-platforms such as Instagram, Snapchat and Pinterest are thriving. Why? It’s because they allow for a deeper connection which is no longer found on the gigantic platforms. These micro networks are easier to digest and excel at very few specific things and that is what makes them attractive.While I have obtained this insight while interning in a sales role at a massive organisation like IBM, this phenomenon is common-practice across most large sales organisations. It’s all about hitting quarterly targets and maximising revenue from a single transaction. But what about the customer? Isn’t this supposed to be about them? In sales we often mistake our product to be the focus of the conversation. The true subject of every conversation should be – what does your client want to do and how will you get them there. This is a picture I always have on my wall. It’s so simple but so rare to see in reality.',
          tags: ['Business', 'Student', 'IBM']
        },

        {
          title: 'Dear Apple, Here is an idea',
          subtitle: 'Our mindset needs to change. We need to start caring again. When did that go out of trend?',
          author: users[0].id,
          date: `${date}`,
          coverPic: 'https://i2.wp.com/trappedinkaran.com/blog/wp-content/uploads/2018/05/Paper.Blog_.38-2.png?w=2048&ssl=1',
          content: 'Apple, it’s a company we all know and love (for the most part) and as a business they’re doing great! Record after record, there seems to be no stopping. However, if you look at their long term strategy, things seem a bit blurry. If you compare the pile of cash they have vs truly innovative services/products that they launched recently, it paints a different picture. With their scale and resources, surely they are capable of more disruption? I don’t know if that is a choice or an oversight but it got me thinking…”What else could Apple do?” A quick scan around the office and I had my answer. Speaking from personal experience, interacting with the physical space in the office hasn’t quite kept up with the speed of digital. As an intern in Internet of Things (IoT), I think about this a lot. How do we maximise our interaction with the physical world around us? How do we use IoT to not just gather two-dimensional data but use it to drive real world social outcomes for humans? The whole IoT revolution, in my opinion, has failed to create rich experiences for us as end-users. You know who does user experiences really well? Apple. They take immense pride in delivering exceptional experiences within their ecosystem.All of my Apple products connect with each other seamlessly, and now they’re slowly moving towards the home market. All of your smart home devices, in one places, via the Home app. It’s great!So, I’m sat in the office, looking around and wondering….nearly every desk has at least one Apple device on it, and I imagine this is the case for many companies, at least in the West. Why in the world has Apple not capitalised on this? Cheeky Amazon is already making moves with Alexa for Business. Apple is nowhere to be found.',
          tags: ['Business', 'Student', 'IBM']
        }

      ]);
  })
  .then(posts => console.log(`Created ${posts.length} posts`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
