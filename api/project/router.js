const express = require('express')
const Projects = require('./model')

const projectsRouter = express.Router()

projectsRouter.get('/', async (req, res, next) => {
	try {
		const data = await Projects.getProjects()
		res.status(200).json(data)
	} catch (err) {
		next(err);
	}
});

projectsRouter.post('/', async (req, res, next) => {
	const projectData = req.body;
	Projects.createProject(projectData)
		.then(newProject => {
			res.status(201).json(newProject)
		})
		.catch(next)
})

module.exports = projectsRouter;
