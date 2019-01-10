const express = require('express');
const passport = require('passport');
const passportLocal = require('passport-local');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const { jwtOptions } = require('../config');
import User from "../models/User";
const bcrypt = require('bcrypt');


const USER = {
  id: '123456789',
  email: 'admin@example.com',
  username: 'admin',
  password: 'admin',
}

const router = express.Router();
const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    // here you should make a database call

    let userToTest= await User.findOne({ username }).exec().then();

    if(bcrypt.compareSync(password, userToTest.password)) {

      var userData = [];
      userData.push({_id: userToTest._id, username: userToTest.username});

      return done(null, userData);
    } else {
      return done(null, false);
    }}
));

passport.use(new JWTStrategy(
  {
    secretOrKey: jwtOptions.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (jwtPayload, done) => {
    const { userId } = jwtPayload;

    let userToTest= await User.findOne({ userId }).exec().then();

    if (userToTest === undefined) {
      return done(null, false);
    }
    return done(null, userToTest);
  },
));

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const { password, ...user } = req.user;
  console.log(password);
  const token = jwt.sign({ userId: user.id }, jwtOptions.secret);
  res.send({ user, token });
});

module.exports = router;
