/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("bin", (table) => {
      table.increments();
      table.text("color").notNullable();
      table.text("name").notNullable();
      table.string("description");
      //   table.text("trashes");
    })
    .createTable("trash", (table) => {
      table.increments();
      table.text("name").notNullable();
      table.string("description");

      table.integer("bin_id").unsigned();
      table.foreign("bin_id").references("id").inTable("bin");
    })
    .createTable("region", (table) => {
      table.increments();
      table.text("name");

      table.integer("planned_dates_id");
      table
        .foreign("planned_dates_id")
        .references("id")
        .inTable("planned dates");
    })
    .createTable("planned dates", (table) => {
      table.increments();
      table.date("date");

      table.integer("region_id");
      table.foreign("region_id").references("id").inTable("region");

      table.text("bin_id");
      table.foreign("bin_id").references("id").inTable("bin");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Planed Dates")
    .dropTableIfExists("Regions")
    .dropTableIfExists("Trash")
    .dropTableIfExists("Bin");
};
