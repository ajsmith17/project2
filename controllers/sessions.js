const express = require('express');
const sessions = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
});

sessions.post('/', (req, res) => {
  // username is found and password matches (successful)

  // username not found (unsuccessful)

  // username found but password doesn't match (unsuccessful)

  // some weird thing happened???

  // Step 1: Look for username
  User.findOne({username: req.body.username}, (err, foundUser) => {
    // Database error
    if (err) {
      console.log(err);
      res.send('oops something went wrong!');
    } else if (!foundUser) { // if found user is undefined or null
      res.send('<a href="/">Sorry, user not found!</a>');
    } else { // user is found
      // check if passwords match
      if(bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add user to our session
        req.session.currentUser = foundUser;
        // redirect back to our home page
        res.redirect('/app');
      } else { // passwords do not match
        res.send('<a href="/">wrong password</a>');
      }
    }
  });
});

sessions.delete('/', (req, res)=>{
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = sessions;
