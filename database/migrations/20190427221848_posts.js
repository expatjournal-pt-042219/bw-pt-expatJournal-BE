
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', posts => {
        posts.increments();

        posts.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')


        posts.timestamps(true, true);

        posts.integer('likes').defaultTo(0);
  
        posts.string('title', 128)
          .notNullable();
  
        posts.string('description')
          .notNullable();
  
      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
  };
