
exports.seed = function (knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {
          resource_name: 'resource one',
          resource_description: 'desc 1'
        },
        {
          resource_name: 'resource two'
        },
        {
          resource_name: 'resource three',
          resource_description: 'desc three'
        }
      ]);
    });
};
