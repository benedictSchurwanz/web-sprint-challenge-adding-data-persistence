
exports.up = function (knex) {
	return knex.schema.createTable('project_resources', table => {
		table.increments('project_resources_id')
		table.integer('project_id')
			.notNullable()
			.unsigned()
			.references('project_id')
			.inTable('projects')
			.onDelete('CASCADE')
		table.integer('resource_id')
			.notNullable()
			.unsigned()
			.references('resource_id')
			.inTable('resources')
			.onDelete('CASCADE')
	})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
};
