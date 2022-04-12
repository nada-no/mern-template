var express = require("express"),
  router = express.Router();

const user = require('../controllers/user');

//index
// router.route("/").get(function (req, res, next) {
//   auth = true;
//   next();
// });
router.route("/").get(function (req, res, next) {
  res.render("index", {auth: true});
});

//register
router.route("/register").get(async (req, res, next) => {
  res.render("register");
});

//add user
router.post('/create', user.add);
router.post('/create', function (req, res, next) {
  res.render("index");
});

//login
router.post('/login', user.login);
router.post('/login', function (req, res, next) {
  res.render("socket");
});

module.exports = router;
