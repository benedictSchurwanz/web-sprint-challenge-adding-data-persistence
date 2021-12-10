const express = require('express')
const Resources = require('./model')

const resourcesRouter = express.Router()

resourcesRouter.get('/', async (req, res, next) => {
	try {
		const data = await Resources.getResources()
		res.status(200).json(data)
	} catch (err) {
		next(err);
	}
});

resourcesRouter.post('/', async (req, res, next) => {
	const resourceData = req.body;
	Resources.createResource(resourceData)
		.then(newResource => {
			res.status(201).json(newResource)
		})
		.catch(next)
})

module.exports = resourcesRouter;
