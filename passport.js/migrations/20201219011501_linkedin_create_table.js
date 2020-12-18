
exports.up = (knex) => {
    return knex.schema.createTable("linkedin", (table) => {
        table.increments().primary()
        table.string('linkedin_id').notNullable()
        table.string("DisplayName").notNullable();
        table.string("DateTime").notNullable();

    });
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("linkedin");

  
};
