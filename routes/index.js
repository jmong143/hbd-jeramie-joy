var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Happy Birthday Jeramie Joy Alayon' });
});

/* GET birthday girl. */
router.get('/birthday-girl', function(req, res, next) {
  res.render('birthday-girl', { title: 'Happy Birthday Jeramie Joy Alayon' });
});

/* GET throwback. */
router.get('/throwback', function(req, res, next) {
  res.render('throwback', { title: 'Throwback - Happy Birthday Jeramie Joy Alayon' });
});

/* GET greetings. */
router.get('/greetings', function(req, res, next) {
  res.render('greetings', { title: 'Greetings - Happy Birthday Jeramie Joy Alayon' });
});

module.exports = router;
