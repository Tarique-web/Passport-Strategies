
exports.up = (knex) => {
    return knex.schema.createTable("google", (table) => {
        table.increments().primary()
        table.string('google_id').notNullable()
        table.string("DisplayName").notNullable();
        table.string("email").notNullable();
        table.string("picture").notNullable();
        table.string("DateTime").notNullable();
        
    });
}
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("google");

};
