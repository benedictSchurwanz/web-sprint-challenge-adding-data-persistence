
exports.seed = function(knex) {
  return knex('table_name').truncate()
    .then(function () {
      return knex('table_name').insert([
        { project_name: 'excellent project', project_description: 'excellent description', 
          project_completed: false } ,
          { project_name: 'super project', project_description: 'super description', 
          project_completed: false }, 
          { project_name: 'done project', project_description: 'done description', 
          project_completed: true }
      ]);
    });
};
