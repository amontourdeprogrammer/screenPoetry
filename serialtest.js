var SerialPort = require('serialport');

//serial listener
function serialListener()
{
	var receivedData = "";
	serialPort = new SerialPort('/dev/cu.usbmodemfa141', {
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