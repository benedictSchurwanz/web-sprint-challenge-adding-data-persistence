const express = require('express')
const Tasks = require('./model')

const tasksRouter = express.Router()

tasksRouter.get('/', async (req, res, next) => {
	try {
		const data = await Tasks.getTasks()
		res.status(200).json(data)
	} catch (err) {
		next(err);
	}
});

tasksRouter.post('/', async (req, res, next) => {
	const taskData = req.body;
	Tasks.createTask(taskData)
		.then(newTask => {
			res.status(201).json(newTask)
		})
		.catch(next)
})

module.exports = tasksRouter;
