var express = require("express"),
  router = express.Router(); 

router.route("/").get(async (req, res, next) => {
  res.render("socket");
});

module.exports = router;
