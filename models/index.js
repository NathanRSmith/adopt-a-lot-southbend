module.exports = function (db){
    db.models = {
        job: require('./job')(db)
    };
}
