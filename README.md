![](https://i.imgur.com/o8o4RV4.png)

> **[Visit Echo](https://echo-platform.herokuapp.com/)**

# Goal
To create a blogging platform which includes user authentication and RESTful routes (in 6 days).

# Technologies Used
* HTML5
* CSS3
* Javascript (ECMAScript 6)
* Node.js
* MongoDB
* Mongoose
* Express
* EJS
* Heroku
* Bulma


---
# Approach Taken
I kicked off the project by setting up my Trello board which served as the base for planning and prioritising actions.

<p align="center"><img src="https://i.imgur.com/nkDBA73.jpg"></p>

### Wireframing
<p align="center"><img src="https://i.imgur.com/Aeg2WNM.png"></p>
<p align="center"><img src="https://i.imgur.com/x7Yoa9U.png"></p>

### Result

<p align="center"><img src="https://thumbs.gfycat.com/PhysicalUnhappyJanenschia-size_restricted.gif"></p>

### Core functionality

1. **Authentication** – Users can register and log in to create posts and comment.

2. **Control flows** – A user can edit and delete only their own posts and comments.

3. **User profiles** – Every user has a profile page where their published posts are displayed. This is visible to the public.
 
4. **Search** – I implemented the search functionality using MongoDB's Indexing ability. This allows the user to search for any string or number in the database.

<p align="center"><img src="https://i.imgur.com/9hpFPp2.png"></p>

5. **Night mode** – Being a night owl, I read a lot at night and very few websites are optimised to support this. This is why I implemented a toggle which optimises the website for reading in the dark.

<p align="center"><img src="https://thumbs.gfycat.com/IncomparableUnripeKittiwake-size_restricted.gif"></p>
<p align="center"><img src="https://thumbs.gfycat.com/ForthrightBothBumblebee-size_restricted.gif"></p>

### Bonus Features

After implementing the core functionality I had in mind, I decided to implement a couple of features that would add to the user experience.

* **Read Time** – Being able to know how long a particular read is going to be without having to scroll all the way down is a feature people said they found useful on sites like Medium.

	This is why I decided to add read time to the title card which calculates the time based on a speed of 260 words per minute.
	
* **Likes** – Users have the ability to like and unlike posts. More could have been with this feature but I could not achieve it under the time constraint. (I elaborate on this in the future features section).


---
# Wins
* **Night mode** – Night mode was a feature that I only added on the last day of the development sprint. I completely underestimated the impact of this final touch. 

	While user testing, an individual with visual impairment told me that this instantly improved his experience drastically and many others equally enjoyed this feature.

* **Styling and user experience** – My goal from the very beginning was to create a beautiful and fluid experience. 

	I focused on big bold cards which focused on quality and personalisation. I topped off the experience by adding subtle animations which helped bring the web app to life.
	
<p align="center"><img src="https://thumbs.gfycat.com/ReflectingUnrealisticBarnacle-size_restricted.gif"></p>
 
---
# Blockers
* **Comments and likes** – A challenge I faced was linking a like/comment to the identity of the person who performed the action. I had to get some help from my tutors to figure out the implementation of Object IDs, through which I managed to tap into all properties of the user object.

---
# Future Features
* **Audio in articles** – Adding text-to-speech functionality for people who prefer audio as a format to consume their content.

* **Collections** – Having the ability to bookmark note-worthy articles and creating pinterest-like collections for accessing later.

* **Recommendations based on likes** – Using the articles the user has liked and the articles liked by people they are following to display personalised and recommended articles.
