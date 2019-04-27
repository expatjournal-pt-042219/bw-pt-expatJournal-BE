
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', photos =>{
      photos.increments();

      photos.string('created_at', 128);

      photos.string('title', 128)

      photos.string('description', 255);

      photos.string('photo_url', 128)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('photos')
};
