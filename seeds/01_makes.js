/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('makes').del()
  await knex('makes').insert([
    {id: 1, name: 'toyota'},
    {id: 2, name: 'subaru'},
    {id: 3, name: 'honda'},
  ]);
};
