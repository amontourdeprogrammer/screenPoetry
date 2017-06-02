var express = require('express');
var router = express.Router();
const {serialListener} = require('../bin/talkToArduino.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  // write something to serial port

  res.render('index', { title: 'Screen Poetry' });
});

var words = [];

router.post('/', function (req, res) {
	if (words.length < 3) {
		words.push(req.body.userInput);
		if (words.length == 1) {
			serialListener("Gimme a verb");
		} else if (words.length == 2){
			serialListener("Gimme a complement");
		} else if (words.length == 3){
			serialListener("Gimme an adjective");
		}
	} else {
		words.push(req.body.userInput);
		var sentence = words.join(" ");
		serialListener(sentence);
		words = [];
	};

	res.render('index', { title: 'Screen Poetry', userInput: req.body.userInput });
});

module.exports = router;

var SerialPort = require('serialport');
require('dotenv').config();