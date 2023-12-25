var raven = require('raven');

var client = new raven.Client('http://9363a2c1f23940c6b79488dab9ca31a0:ca2c77314d0d44bd8a0d64c6d09d0454@8.218.154.207:9000/3');

// record a simple message
client.captureMessage('hello hello world!')