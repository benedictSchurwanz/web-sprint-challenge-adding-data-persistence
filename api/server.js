const express = require('express');

// import router
// const FooRouter = require('.../foo-router.js')

const server = express();

server.use(express.json())

// route 
// server.use('/api/foos', FooRouter)

// Endpoints: (should be in other router files.)

// server.use((err, req, res, next) => {
// 	res.status(err.status || 500).json({ message: err.message})
// })

server.get('/', (req, res) => {
	res.status(200).json({ api: "server is up" })
})

module.exports = server;
