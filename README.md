# Note.js

Note.js is a full CRUD app that uses a variety of NPM packages as well as front end languages. The user upon authentication will have a virtual bulletin board that they can pin notes to, whether they be motivational, a reminder, or whatever else they would like. Being full CRUD, the user can edit and delete their different notes and create new ones whenever they want.

### Getting Started:

https://secure-earth-79518.herokuapp.com/

Open the link, sign up for an account, and log in. You will be directed to the main index page where all the notes you create will be pinned to the board and visible. Click "New Note" in the upper left to create one, and use the edit and delete buttons on the notes as needed. See the entire note and its content by clicking on the title of the specific note.

### Technologies and Approach:

The app uses a combination of HTML, CSS, and Javascript, as well as Node.js (the inspiration for the app name), MongoDB, EJS, Dotenv, Mongoose, and Express. The user must first authenticate with log in credentials and once logged in will be shown the main index page. The notes on the index page are displayed via a "for" loop with the data saved to the database when a new note was created. Each new note upon creation will be assigned a different, randomized CSS class that will alter it's rotation slightly to give the effect of a real-life bulletin board. The font was also used in an attempt to imitate handwriting instead of a generic web font. The CRUD part of the app is entirely visible to the user on the page, with buttons for new, edit, and delete, and the title linking to the note's show page. In the future, I would probably do away with the show page and have the entire note rendered on the index page to improve UX, however I decided to leave the show page in for the sake of CRUD. As a result, so that the show page would not be redundant, I limited the content of the notes on the main page to only display the first four words and linked the title of the note to the show page. I purposely left the title as a link because I liked how the blue looked and stood out against the rest of the page, and the changing color of the clicked link lets the user know they've already viewed that one.

### Unsolved Problems:

There were a couple directions I would have liked to go with this app with more time. The ability to organize the note cards by category would've been a nice addition, but I would really love to implement a drag and drop feature so that the user can organize the cards themselves in whatever way they see fit. A quick thing would be to assign random colors to the note card and pins upon creation as I had done with the rotation, which would bring another realistic twist to the app. I tried for awhile to figure out how to put a wood border around the page to enhance the look and feel of the board but gave up on that in favor of finishing more essential parts after a few hours of no breakthrough.
