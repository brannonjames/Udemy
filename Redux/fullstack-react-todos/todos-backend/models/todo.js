const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
	task: String,
	completed: {
		type: Boolean,
		default: false
	}
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;