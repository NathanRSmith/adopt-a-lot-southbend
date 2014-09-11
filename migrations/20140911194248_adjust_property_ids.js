'use strict';

exports.up = function(knex, Promise) {
    return knex.schema.table('job', function(table) {
        table.dropColumn('property_id');
        table.string('parcel_id');
        table.string('state_parcel_id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('job', function(table) {
        table.dropColumns('parcel_id', 'state_parcel_id');
        table.string('property_id');
    })
};
