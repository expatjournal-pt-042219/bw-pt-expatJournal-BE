
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Jamar', password:'Jamar12345Jamar'},
        {id: 2, username: 'Joseph', password:'Joseph123'},
        {id: 3, username: 'Shayan', password: 'avengers'}
      ]);
    });
};
