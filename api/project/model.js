const db = require('../../data/dbConfig')

const getProjects = () => {
	return db('projects');
}

module.exports = {
	getProjects,
}
