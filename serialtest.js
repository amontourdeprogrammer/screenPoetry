var SerialPort = require('serialport');
require('dotenv').config()

//serial listener
function serialListener()
{
	var receivedData = "";
	serialPort = new SerialPort(process.env.ARDUINOPORTNAME, {
	    baudrate: 9600,
	    // defaults for Arduino serial communication
	     dataBits: 8, 
	     parity: 'none', 
	     stopBits: 1, 
	     flowControl: false 
	});

	serialPort.on("open", function () {
        console.log('open serial communication');
	    serialPort.write('hello from node');
	});
}

serialListener();