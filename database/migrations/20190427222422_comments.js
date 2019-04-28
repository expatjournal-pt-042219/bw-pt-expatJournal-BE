
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', comments => {
      comments.increments()

    //   comments.timestamps(true, true);

      comments.string('created_at', 128)

      comments.string('enter_comment', 255)
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
