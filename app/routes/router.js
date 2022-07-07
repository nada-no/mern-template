var express = require("express"),
	router = express.Router();

// import the controllers for the routes
const task = require("../controllers/task");

//Routes
router.get("/", function (req, res, next) {
	res.render("index");
});

router.post("/save", task.save);
router.post("/save", function (req, res, next) {
	res.render("index");
});

router.get("/tasks", task.getAll);

module.exports = router;
