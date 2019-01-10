require("dotenv").config();
const express = require('express');
const passport = require('passport');
import User from "../models/Movie";

let moviesController = require('../controllers/moviesController');
let registerController = require('../controllers/registerController');


const router = express.Router();

/**
 * authenticationRequired is a middleware that use the jwt strategy to authenticate
 * the use. If authentication fails, passport will respond with a 401 Unauthorized status.
 * If authentication succeeds, the `req.user` property will be set to the authenticated user.
 */
const authenticationRequired = passport.authenticate('jwt', { session: false });

/**
 * authentication middleware overrides the default behavior of passport. The next handler is
 * always invoked. If authentication fails, the `req.user` property will be set to null.
 * If authentication succeeds, the `req.user` property will be set to the authenticated user.
 * see: http://www.passportjs.org/docs/authenticate/#custom-callback
 */
const authentication = (req, res, next) => {
  return passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) { next(err) }
    req.user = user || null;
    next();
  })(req, res, next);
}


router.route('/movies').get(moviesController.index);
router.route('/register').post(registerController.new);
router.route('/editWatchList').post(registerController.new);


module.exports = router;
