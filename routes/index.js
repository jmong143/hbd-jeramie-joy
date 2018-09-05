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

  let greetingsData = {
    "all": [
      {"id": "1", "name": "Jocelyn Mercado", "class": "btn-primary", "greetUrl1": "/img/greetings/message/jocelyn-mercado-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/jocelyn-mercado-self.png"},
      {"id": "2", "name": "John Joseph Dagonio", "class": "btn-danger", "greetUrl1": "/img/greetings/message/john-joseph-dagonio-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/QrSTuZzbD9g?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/john-joseph-dagonio-self.png"},
      {"id": "3", "name": "Jennifer Almoete", "class": "btn-danger", "greetUrl1": "/img/greetings/message/jennifer-almoete-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/jennifer-almoete-self.png"},
      {"id": "4", "name": "Christian Osias", "class": "btn-danger", "greetUrl1": "/img/greetings/message/christian-osias-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/christian-osias-self.png"},
      {"id": "5", "name": "Reynald Nabur", "class": "btn-danger", "greetUrl1": "/img/greetings/message/reynald-nabur-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/reynald-nabur-self.png"},
      {"id": "6", "name": "Lorelyn Caballas", "class": "btn-danger", "greetUrl1": "/img/greetings/message/lorelyn-caballas-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/lorelyn-caballas-self.png"},
      {"id": "7", "name": "Maicha De Ocampo", "class": "btn-danger", "greetUrl1": "/img/greetings/message/maicha-de-ocampo-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/maicha-de-ocampo-self.png"},
      {"id": "8", "name": "Louie Briones", "class": "btn-danger", "greetUrl1": "/img/greetings/message/louie-briones-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/louie-briones-self.png"},
      {"id": "9", "name": "Dian Capal", "class": "btn-danger", "greetUrl1": "/img/greetings/message/dian-capal-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/dian-capal-self.png"},
      {"id": "10", "name": "Jireh Joy Alayon", "class": "btn-danger", "greetUrl1": "/img/greetings/message/bam-greet1.png", "greetUrl2": "/img/greetings/message/bam-greet2.png", "greetUrl3": "/img/greetings/message/bam-greet3.png", "videoUrl": "", "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/bam-self.png"},
      {"id": "11", "name": "Sherry Mae Manuel", "class": "btn-danger", "greetUrl1": "/img/greetings/message/sherry-greet.png", "greetUrl2": "", "greetUrl3": "", "videoUrl": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/kDiVuWZ-Ces?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "videoUrl2": "", "videoUrl3": "", "picUrl": "/img/greetings/dp/sherry-self.png"},
      {"id": "12", "name": "Marvin and Bel", "class": "btn-danger", "greetUrl1": "", "greetUrl2": "", "greetUrl3": "", "videoUrl": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/5rPahS25wc4?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "videoUrl2": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/dntFx0-miBk?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "videoUrl3": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/K4gPnBFdjtc?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "picUrl": "/img/greetings/dp/marbel-self.png"},
      {"id": "13", "name": "Anjanette Gan and Amanda", "class": "btn-danger", "greetUrl1": "", "greetUrl2": "", "greetUrl3": "", "videoUrl": '<div style="position:relative;height:0;padding-bottom:75.0%"><iframe src="https://www.youtube.com/embed/yw7tyap-hOc?ecver=2" width="480" height="360" frameborder="0" allow="autoplay; encrypted-media" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div> ', "videoUrl2": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/dntFx0-miBk?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "videoUrl3": '<div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/K4gPnBFdjtc?ecver=2" style="position:absolute;width:100%;height:100%;left:0" width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>', "picUrl": "/img/greetings/dp/anjanette-self.png"}
      
     
    ]
  }
  res.render('greetings', { title: 'Greetings - Happy Birthday Jeramie Joy Alayon', greetingsData: greetingsData });
});

module.exports = router;
