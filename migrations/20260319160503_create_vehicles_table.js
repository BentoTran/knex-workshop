/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('vehicles', table => {
        table.increments();
        table.string('vin', 50).notNullable();
        table.integer('year', 8);
        table.string('horse_power', 50);
        table.string('color', 50);
        table.integer('mpg', 50);
        table.integer('models_id').unsigned().notNullable();
        table.foreign('models_id').references(`models.id`)
    })
};


exports.down = function(knex) {
    return knex.schema.alterTable('vehicles', table => {
        table.dropForeign('models_id');
    }).then(function() {
        return knex.schema.dropSchemaIfExists('vehicles');
    })
};