
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Jamar', password:'Jamar'},
        {id: 2, username: 'Joseph', password:'Joseph'},
        {id: 3, username: 'Shayan', password: 'Shayan'}
      ]);
    });
};
