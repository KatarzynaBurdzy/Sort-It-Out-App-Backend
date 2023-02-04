/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Bin", (table) => {
      table.increments();
      table.text("color").notNullable();
      table.text("name").notNullable();
      table.string("description");
      //   table.text("trashes");
    })
    .createTable("Trash", (table) => {
      table.increments();
      table.text("name").notNullable();
      table.string("description");

      table.integer("bin_id").unsigned();
      table.foreign("bin_id").references("id").inTable("Bin");
    })
    .createTable("Region", (table) => {
      table.increments();
      table.text("name");

      table.integer("planned_dates_id");
      table
        .foreign("planned_dates_id")
        .references("id")
        .inTable("Planned dates");
    })
    .createTable("Planned dates", (table) => {
      table.increments();
      table.date("date");

      table.integer("region_id");
      table.foreign("region_id").references("id").inTable("Region");

      table.text("bin_id");
      table.foreign("bin_id").references("id").inTable("Bin");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // ? I don't understand what that function is supposed to do
  return knex.schema
    .dropTableIfExists("Planed Dates")
    .dropTableIfExists("Regions")
    .dropTableIfExists("Trash")
    .dropTableIfExists("Bin");
};
// run migration: npx knex migrate:latest
// sqlite studio to see database
