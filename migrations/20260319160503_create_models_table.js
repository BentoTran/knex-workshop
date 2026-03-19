/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('models', table => {
        table.increments();
        table.string('name', 250).notNullable();
        table.integer('makes_id').unsigned().notNullable();
        table.foreign('makes_id').references(`makes.id`);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('models', table => {
        table.dropForeign('makes_id');
    }).then(function() {
        return knex.schema.dropSchemaIfExists('models');
    })
};