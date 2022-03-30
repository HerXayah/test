import { connect } from './browserMqtt.js'; // import everything inside the mqtt module and give it the namespace "mqtt"

; client = mqtt.connect('ws://localhost:9001'); // you add a ws:// url here

function testMqtt() {
	client.subscribe('test');

	client.on('message', function (topic, payload) {
		alert([topic, payload].join(': '));
		client.end();
	});

	client.publish('test', 'hello world!');
}
