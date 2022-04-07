var express = require("express"),
  router = express.Router(); 

const user = require('../controllers/user');

router.route("/").get(async (req, res, next) => {
  res.render("index");
});


router.post('/create', user.add);

module.exports = router;
