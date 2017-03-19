const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY || 'vodvod';

module.exports = {
  checkUser: function (req, res, next) {
    console.log(req.user, 'checkUser')
    if (req.user) {
      next();
    } else {
      res.redirect('/signin');
    }
  },
  checkAdmin: function (req, res, next) {
    const user = req.user
    if (user && user.isAdmin) {
      next()
    } else {
      res.status(401)
    }
  }
}
