var express = require('express');
var router = express.Router();

// to test if this fixes the website displaying properly
const books = [
  { id: 1, name: 'Sample Book 1', author: 'Author 1', year: 2021 },
  { id: 2, name: 'Sample Book 2', author: 'Author 2', year: 2022 }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "BookTracker", books });
});

module.exports = router;
