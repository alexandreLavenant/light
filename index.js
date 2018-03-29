'use strict';

const 	config		= require('config'),
		// Dash Button Setup
		dashButton	= require('node-dash-button'),
		dash		= dashButton(config.get('dash.mac'), null, null, 'all'),
		// Light Setup
		LifxClient	= require('node-lifx').Client,
		lifx		= new LifxClient(),
		lifxIp 		= config.get('light.ip')
		;
		
lifx.init({
	lights : [lifxIp]
});

// Dash Button
dash.on("detected", () =>
{
	lifx.light(lifxIp).getPower((err, lightState) => {
		if (lightState) {
			lifx.light(lifxIp).off();
		} else {
			lifx.light(lifxIp).on();
		}
		console.log('Switch Button to: ' + (!lightState ? 'on' : 'off'));	
	});
});

console.log('Light Ready');
