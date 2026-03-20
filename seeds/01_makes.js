/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('makes').del()
  await knex('makes').insert([
    {id: 1, name: 'Toyota'},
    {id: 2, name: 'Subaru'},
    {id: 3, name: 'Honda'},
  ]);
};
