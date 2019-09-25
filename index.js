'use strict';

const 	config		= require('config'),
		// Dash Button Setup
		DashButton	= require('dash-button'),
		dash		= new DashButton(config.get('dash.mac')),
		// Light Setup
		LifxClient	= require('node-lifx').Client,
		lifx		= new LifxClient(),
		lifxIp 		= config.get('light.ip')
		;
		
lifx.init({
	lights : [ lifxIp ]
});

// Dash Button
dash.addListener(async () => {
	let lightState = await lifx.light(lifxIp).getPower();

	if (lightState) {
		lifx.light(lifxIp).off();
	} else {
		lifx.light(lifxIp).on();
	}

	console.log('Switch Button to: ' + (!lightState ? 'on' : 'off'));
});

console.log('Light Ready');