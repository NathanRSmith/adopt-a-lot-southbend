'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.createTable('job', function(table) {
        table.increments();
        table.timestamps();
        table.string('name');
        table.text('description');
        table.string('property_id');
        table.float('latitude');
        table.float('longitude');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('job')
};
