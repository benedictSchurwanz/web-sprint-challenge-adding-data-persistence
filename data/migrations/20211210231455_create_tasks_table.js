
exports.up = function (knex) {
	return knex.schema.createTable('tasks', table => {
		table.increments('task_id');
		table.text('task_description')
			.notNullable();
		table.text('task_notes');
		table.boolean('task_completed')
			.defaultTo(false);
		table.integer('project_id')
			.unsigned()
			.references('project_id')
			.inTable('projects')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
			.notNullable()
	})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('tasks')
};
