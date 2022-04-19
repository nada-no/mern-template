var User = require('../models/user');
// var jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
// const app = require('../app');





//Create a new user and save it
var add = (req, res, next) => {
  var user = new User({ name: req.body.name, password: req.body.password });
  user.save();
  // console.log(user);
  next();
};

//find all people
var list = (req, res, next) => {
  User.find( (err, users) => {
    console.log(users)
    return users;
  });
};

//find person by id
var find = (req, res) => {
  User.findOne({ _id: req.params.id }, function (error, user) {
    return user;
  })
};

//login
var login = (req, res, next) => {
  User.findOne({ name: req.body.name })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }else {
        if (!user) {
          // return res.status(404).send({ message: "User Not found." });
          res.render("index", { auth: false });
          res.end();
        } else if (req.body.password != user.password) {
          // return res.status(404).send({ message: "Incorrect password" });
          res.render("index", { auth: false });
          res.end();
        } else {
        //create token for the auth
        // var token = jwt.sign({ id: user.id }, config.secret, {
        //   expiresIn: 86400 // 24 hours
        // });
        // res.status(200).send({
        //   id: user._id,
        //   name: user.name,
        //   accessToken: token
        // });
          req.session.auth = true; //hay que probar de poner el objeto user
          req.session.user = user;
          console.log(user);
          res.redirect('/chat/list');
        }
      }
    });
};

//logout
var logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
  // res.send("session destruida");
};

//middleware auth
var auth = (req, res, next) => {
  if(req.session.auth) {
    next();
  }else{
    res.render("index", { auth: false });
  }
};

module.exports = {
  add,
  list,
  find,
  login,
  logout,
  auth
}