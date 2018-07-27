const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');

// create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new localStrategy(localOptions, function(email, password, done){
  // verify this email and passord, call done with the user
  // if it is the correct email and password
  // otherwise call done with false
  User.findOne({ email: email }, function(err, user){
    if (err) { return done(err) }
    if (!user) { return done(null, false) }

    // compare passwords - is `password` equal to user.password?
  })
});

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  User.findById(payload.sub, function(err, user){
    if(err){ return done(err, false); }

    if(user){
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);


