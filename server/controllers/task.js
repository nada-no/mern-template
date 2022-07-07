//import models
var Task = require("../models/task");

//create new task
let save = (req, res, next) => {
	var task = new Task({ name: req.body.name, status: false });
	task.save();
	next();
};

let getAll = async (req, res) => {
	var tasks = await Task.find({}).exec();

	// tasks = tasks.map((el) => {
	// 	return {
	// 		name: el.name,
	// 		status: el.status,
	// 	};
	// });
    // tasks = JSON.parse(JSON.stringify(tasks));

	console.log(tasks);
	res.render("tasks",{tasks});
};

//export the methods
module.exports = {
	save,
	getAll,
};
