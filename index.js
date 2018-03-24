'use strict';

const 	config = require('config'),
		dashButton = require('node-dash-button'),
		lifx = require('lifx'),
		// Dash button Setup
		dash = dashButton(config.get('dash.mac'), null, null, 'all'),
		lx = lifx.init(),
		lightState = false
		;


// Dash Button
dash.on("detected", () =>
{
	console.log('Switch Button : pressed');

	if (lightState) {
		lx.lightsOff();
		lightState = false;
	} else {
		lx.lightsOn();
		lightState = true;
	}
	console.log('Switch Button to: ' + (lightState ? 'on' : 'off'));	
});

console.log('Light Ready');
