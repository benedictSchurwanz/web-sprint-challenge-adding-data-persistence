const db = require('../../data/dbConfig')

const getTasks = () => {
	return db('tasks');
}

const getById = async (taskId) => {
	const [record] = await db('tasks')
		.select()
		.where('task_id', taskId);
	return record;
}

const createTask = (newTaskData, projectData) => {
	return db('tasks')
		.insert(newTaskData)
		.then(taskId => {
			const newTask = getById(taskId)
			return ({
				...newTask,
				project_name: projectData.project_name,
				project_description: projectData.project_description
			})
		})
}

module.exports = {
	getTasks,
	getById,
	createTask,
}
