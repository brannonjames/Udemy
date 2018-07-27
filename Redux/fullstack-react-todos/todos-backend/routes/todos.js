const express = require('express');
const router = express.Router();
const Todo = require("../models/todo");


router.route("/")
	.get(function(req, res, next) {
		Todo.find({})
			.then(todos => res.send(todos))
			.catch(err => next(err));
	})
	.post(function(req, res, next) {
		Todo.create(req.body)
			.then(todo => res.status(201).send(todo))
			.catch(err => next(err));
	});

router.route("/:id")
	.put(function(req, res, next) {
		Todo.findById(req.params.id)
			.then(todo => {
				todo.completed = !todo.completed;
				return todo.save();
			})
			.then(updatedTodo => {
				res.send(updatedTodo);
			})
			.catch(err => next(err));
	})
	.delete(function(req, res, next) {
		Todo.findByIdAndRemove(req.params.id)
			.then(todo => res.send(todo))
			.catch(err => next(err));
	});	


module.exports = router;