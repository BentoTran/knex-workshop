/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('models').del()
  await knex('models').insert([
    {id: 1, name: 'supra', makes_id: 1},
    {id: 2, name: 'camry', makes_id: 1},
    {id: 3, name: 'wrx', makes_id: 2},
    {id: 4, name: 'outback', makes_id: 2},
    {id: 5, name: 'nsx', makes_id: 3},
    {id: 6, name: 'civic', makes_id: 3}

  ]);
};
