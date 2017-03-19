var morgan = require('morgan')
var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
// var session = require('cookie-session');
var LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);

var userModel = require('../api/user/userModel')
var config = require('../config')
console.log(config)
var env = process.env.NODE_ENV || 'development'
const secretKey = process.env.SECRET_KEY || 'vodvod';

// SETUP global middleware here
module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser(secretKey));
  // app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));
  app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: config.db
    })
}));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(userModel.createStrategy())

  passport.serializeUser(userModel.serializeUser());
  passport.deserializeUser(userModel.deserializeUser());

  if (env === 'development') {
    var webpack = require('webpack')
    var webpackConfig = require('../../webpack.config.babel').default
    var compiler = webpack(webpackConfig)
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    }))
    app.use(require('webpack-hot-middleware')(compiler))
    console.log(path.join(__dirname, '../public'))
    app.use('/public', express.static(path.join(__dirname, '../../public')))
    // app.use(express.static(path.join(__dirname, '../../dist')))
    app.use(morgan('dev'))
  }


};
