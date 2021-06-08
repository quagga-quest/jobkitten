const express = require('express');
const path = require('path');
const PORT = 3333;
const app = express();
const passport = require("passport");
const keys = require("./config/keys");
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/oauth-routes.js');


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  }))

  //initialize passport
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    console.log('inside route conditional')
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../index.html'));
    });
  }
  app.use('/auth' , authRoutes)

  /**
   * configire express global error handler
   */
  //catch all for errors//
  app.use('*', (req,res,next) => {
    return res.status(404).send('invalid end point')
  })
  
  
  app.use(function (err, req, res, next) {
      const defaultError = {
          log: ('Express error handler caught unknown middleware error', err ),
          status: 400,
          message: { err: 'An error occurred' },
      };
      const errorObj = Object.assign(defaultError, err);
      console.log(errorObj.log);
      res.status(errorObj.status).json(errorObj.message);
  });



app.listen(PORT);