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

const createTask = (newTaskData) => {
	return db('tasks')
		.insert(newTaskData)
		.then(taskId => {
			return getById(taskId)
		})
}

module.exports = {
	getTasks,
	getById,
	createTask,
}
