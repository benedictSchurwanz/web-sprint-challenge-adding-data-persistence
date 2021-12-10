const db = require('../../data/dbConfig')

const getProjects = () => {
	return db('projects');
}


const getById = async (projectId) => {
	const [record] = await db('projects')
		.select()
		.where('project_id', projectId);
	return record;
}

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
