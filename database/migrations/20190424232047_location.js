
exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', location => {
    location.increments();

    location.string('city')
        .notNullable()

    location.string('country')
        .notNullable()
        
  })
};

exports.down = function(knex, Promise) {
  
};
