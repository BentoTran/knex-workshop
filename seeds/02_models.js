/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('models').del()
  await knex('models').insert([
    {id: 1, name: 'Supra', makes_id: 1},
    {id: 2, name: 'Camry', makes_id: 1},
    {id: 3, name: 'Wrx', makes_id: 2},
    {id: 4, name: 'Outback', makes_id: 2},
    {id: 5, name: 'Nsx', makes_id: 3},
    {id: 6, name: 'Civic', makes_id: 3}
  ]);
};
