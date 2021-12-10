
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {
          task_description: 'task 1 desc',
          task_notes: 'task 1 notes',
          project_id: 1,
        },
        {
          task_description: 'task 2 desc',
          task_notes: 'task 2 notes',
          project_id: 2,
        },
        {
          task_description: 'task 3 desc',
          project_id: 1,
        },
      ]);
    });
};
