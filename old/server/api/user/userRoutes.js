const userRouter = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userModel = require('./userModel');
const authMiddleware = require('../../middleware/authMiddleware');

const secretKey = process.env.SECRET_KEY || 'vodvod';

userRouter.get('/', authMiddleware.checkUser, function(req, res) {
  userModel.find({}, function(err, users) {
    if (err) {
      return res.status(403).send(err);
    }
    // object of all the users
    res.status(200).send(users);
  });
});

userRouter.get('/:id', function(req, res) {
  userModel.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    // show the one user
    res.status(200).send(user);
  });
});

userRouter.post('/register', function(req, res, next) {
  console.log('registering user');
  userModel.register(new userModel({username: req.body.username}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');

    res.redirect('/');
  });
});

userRouter.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

userRouter.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
});


module.exports = userRouter;
