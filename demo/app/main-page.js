var flashlight = require( "./node_modules/nativescript-flashlight/flashlight" );
var observable = require( "data/observable" );
var viewModel = new observable.Observable();

viewModel.set( "flashlightState", "Turn on" );
viewModel.toggleFlashlight = function() {
	flashlight.toggle();
	viewModel.set( "flashlightState", ( flashlight.isOn() ? "Turn off" : "Turn on" ) );
};

function pageLoaded( args ) {
	var page = args.object;
	page.bindingContext = viewModel;
}

exports.pageLoaded = pageLoaded;
