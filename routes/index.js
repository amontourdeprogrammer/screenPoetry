var express = require('express');
var router = express.Router();
const {serialListener} = require('../bin/talkToArduino.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  // write something to serial port

  res.render('index', { title: 'Screen Poetry' });
});

router.post('/', function (req, res) {
	serialListener(req.body.userInput);
	res.render('index', { title: 'Screen Poetry', userInput: req.body.userInput });
});

module.exports = router;

var SerialPort = require('serialport');
require('dotenv').config();