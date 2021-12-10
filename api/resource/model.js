const db = require('../../data/dbConfig')

const getResources = () => {
	return db('resources');
}

const getById = async (resourceId) => {
	const [record] = await db('resources')
		.select()
		.where('resource_id', resourceId);
	return record;
}

const createResource = (newResourceData) => {
	return db('resources')
		.insert(newResourceData)
		.then(resourceId => {
			return getById(resourceId)
		})
}

module.exports = {
	getResources,
	getById,
	createResource,
}
