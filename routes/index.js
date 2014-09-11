var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Adopt-A-Lot South Bend' });
});
router.get('/jobs', controllers.jobs.get);

// router.get('/volunteer/claim', require('../controllers').volunteer.claim.get);
router.post('/jobs', controllers.jobs.post);

module.exports = router;
