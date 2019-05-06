
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', comments => {
      comments.increments()

      comments.timestamps(true, true);

      comments.string('comment', 255)
        .notNullable();

      comments.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      comments.integer('post_id')
        .unsigned()
        .references('id')
        .inTable('posts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      comments.integer('photo_id')
        .unsigned()
        .references('id')
        .inTable('photos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
