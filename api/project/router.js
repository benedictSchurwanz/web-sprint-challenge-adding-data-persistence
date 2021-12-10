const express = require('express')
const Projects = require('./model')

const projectsRouter = express.Router()

// get all Projects
projectsRouter.get('/', async (req, res, next) => {
	try {
		const data = await Projects.getProjects()
		res.status(200).json(data)
	} catch (err) {
		next(err);
	}
});

// add new Project

module.exports = projectsRouter;
