
exports.up = function(knex) {
    return knex.schema.createTable('bballPlayers', tbl => {
        tbl.increments();
    
        tbl.string('name', 255).notNullable();
        tbl.string('team', 255).notNullable();
        tbl.string('position', 255).notNullable();


      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('bballPlayers');

};
