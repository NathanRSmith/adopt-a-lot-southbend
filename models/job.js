module.exports = function (db) {

    var Job = db.Model.extend({
        tableName: 'job'
    });

    return {
        Job: Job
    }

}
