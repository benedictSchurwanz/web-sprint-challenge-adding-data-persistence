const db = require('../../data/dbConfig')

// get all projects
const getProjects = () => {
	return db('projects');
}

// needed for retrieving the newly created project
const getById = async (projectId) => {
	const [record] = await db('projects')
		.select()
		.where('project_id', projectId);
	return record;
}

// add new project
const createProject = (newProjectData) => {
	return db('projects')
		.insert(newProjectData)
		.then(projectId => {
			return getById(projectId)
		})
}

module.exports = {
	getProjects,
	getById,
	createProject,
}
