


var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename : 'dev.sqlite3'
    }
});

var bookshelf = require('bookshelf')(knex);
require('../models')(bookshelf);

module.exports.db = bookshelf
