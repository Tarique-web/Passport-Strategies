
exports.up =  (knex) => {
    return knex.schema.createTable("facebook", (table) => {
        table.increments().primary()
        table.string('facebook_id').notNullable()
        table.string("DisplayName").notNullable();
        table.string("DateTime").notNullable();

    });

};

exports.down =  (knex) => {
    return knex.schema.dropTableIfExists("facebook");

};
