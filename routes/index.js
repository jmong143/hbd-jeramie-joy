var express = require('express');
var router = express.Router();

let navbarHeader = [
  {"title": "Home", "icon": "fa fa-home", "link": "/"},
  {"title": "Birthday Girl", "icon": "fa fa-gift", "link": "/birthday-girl"},
  {"title": "Throwback", "icon": "fa fa-heart", "link": "/throwback"},
  {"title": "Greetings", "icon": "fa fa-home", "link": "/greetings"}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Happy Birthday Jeramie Joy Alayon', navbar: navbarHeader, tag: "home" }); 
});

/* GET birthday girl. */
router.get('/birthday-girl', function(req, res, next) {
  res.render('birthday-girl', { title: 'Happy Birthday Jeramie Joy Alayon', navbar: navbarHeader });
});

/* GET throwback. */
router.get('/throwback', function(req, res, next) {
  res.render('throwback', { title: 'Throwback - Happy Birthday Jeramie Joy Alayon', navbar: navbarHeader });
});

/* GET greetings. */
router.get('/greetings', function(req, res, next) {
  res.render('greetings', { title: 'Greetings - Happy Birthday Jeramie Joy Alayon', navbar: navbarHeader });
});

module.exports = router;
