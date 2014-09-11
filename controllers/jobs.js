var _ = require('lodash');

var Job = require('../config/database').db.models.job.Job

module.exports.get = function(req, res) {

    // Send all jobs as JSON
    Job.fetchAll()
        .then(function(jobs) {
            res.json(jobs.toJSON());
        });
}

module.exports.post = function(req, res) {

    // TODO: Sanitize input!!!!
    Job.forge(req.body).save()
        .then(function(job) {
            res.redirect('/');
        })
        .catch(function(err) {
            res.send(500, err.toString())
        });
}
