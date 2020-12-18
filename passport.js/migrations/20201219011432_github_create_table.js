
exports.up =  (knex) => {
    return knex.schema.createTable("github", (table) => {
        table.increments().primary()
        table.string('github_id').notNullable()
        table.string("DisplayName").notNullable();
        table.string("DateTime").notNullable();

    });
};

exports.down =  (knex) => {

    return knex.schema.dropTableIfExists("github");

};
