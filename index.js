var SerialPort = require('serialport');
var mavlink = require('mavlink')

// Open a new port         path to the port
var port = new SerialPort('/dev/tty.Bluetooth-Incoming-Port', {
    //Default
    baudRate: 57600
});

// Switches the port into "flowing mode"
port.on('data', function (data) {
    console.log('Data:', data)
})
port.write("test")  