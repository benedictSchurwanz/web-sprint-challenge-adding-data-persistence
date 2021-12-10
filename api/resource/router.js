const express = require('express')
const Resources = require('./model')

const resourcesRouter = express.Router()

// get all Projects
resourcesRouter.get('/', async (req, res, next) => {
	try {
		const data = await Resources.getProjects()
		res.status(200).json(data)
	} catch (err) {
		next(err);
	}
});

// add new Project
resourcesRouter.post('/', async (req, res, next) => {
	const resourceData = req.body;
	Resources.createProject(resourceData)
		.then(newResource => {
			res.status(201).json(newResource)
		})
		.catch(next)
})

module.exports = resourcesRouter;

