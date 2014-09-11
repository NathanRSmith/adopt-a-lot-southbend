module.exports = function (db) {

    var Job = db.Model.extend({
        tableName: 'job',
        hasTimestamps: true
    });

    return {
        Job: Job
    }

}
