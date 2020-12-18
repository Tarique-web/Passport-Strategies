require('dotenv').config();

const express = require("express");

const passport = require('passport')

// const Users = require('./Model/google');

const router = express.Router();

const app = express();

app.use(passport.initialize());


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

const PORT = process.env.PORT || 5000

require('./service/google')
require('./service/github')
require('./service/linkedin')
require('./service/facebook')

// Google routes 
app.use('/',router);
require('./Routes/auth_google')(router,passport);


// Facebooke routes
app.use("/",router);
require('./Routes/auth_facebook')(router,passport)

// Linkedin routes
app.use("/",router);
require('./Routes/auth_linkedin')(router,passport)

// Github routes
app.use('/',router);
require('./Routes/auth_github')(router,passport)


app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
}) 