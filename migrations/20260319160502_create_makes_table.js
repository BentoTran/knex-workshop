/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("makes", (table) => {
        table.increments();
        table.string('name', 250).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("makes");
};
