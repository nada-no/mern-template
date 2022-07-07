var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

//model
var taskSchema = new Schema({
	name: String,
	status: Boolean,
});

//Export the schema
module.exports = mongoose.model("Task", taskSchema);
