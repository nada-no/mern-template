var express = require("express"),
  router = express.Router(); 

const user = require('../controllers/user');

//index
router.route("/").get(async (req, res, next) => {
  res.render("index");
});

//register
router.route("/register").get(async (req, res, next) => {
  res.render("register");
});

//add user
router.post('/create', user.add);
router.post('/create', function(req, res, next) {
  res.render("index");
});

//login
router.post('/login', user.login);
router.post('/login', function(req, res, next) {
  res.render("socket");
});

module.exports = router;
