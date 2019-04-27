
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', stories => {
      stories.increments();

      stories.string('title', 128)
        .notNullable();

      stories.string('description')
        .notNullable();

    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories');
};
