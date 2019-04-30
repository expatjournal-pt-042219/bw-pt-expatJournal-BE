
exports.up = function(knex, Promise) {
    return knex.schema.createTable('container', container => {
        container.increments();
  
        container.integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
  
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('container');
  };
  