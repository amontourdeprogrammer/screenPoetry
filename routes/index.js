var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // write something to serial port

  res.render('index', { title: 'Screen Poetry' });
});

router.post('/', function (req, res) {
  res.render('index', { title: 'Screen Poetry', userInput: req.body.userInput });
});

module.exports = router;
