const express = require('express');
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
// const tasksRouter = require('./task/router')

const server = express();

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
// server.use('/api/tasks', tasksRouter)

server.get('/', (req, res) => {
	res.status(200).json({ api: "server is up" })
})

server.use((err, req, res, next) => { // eslint-disable-line
	res.status(500).json({ message: err.message })
})

module.exports = server;
