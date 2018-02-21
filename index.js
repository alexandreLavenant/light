'use strict';

import config from 'config';
import dashButton from 'node-dash-button';
import lifx from 'lifx';
// Dash button Setup
const	dash = dashButton(config.get('dash.mac'), null, null, 'all'),
		lx = lifx.init()
		;

let lightState = false; 

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
});

console.log('Light Ready');
