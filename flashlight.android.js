var flashlight = require( "./flashlight-common" );
var camera = android.hardware.Camera.open();
var p = camera.getParameters();

flashlight.on = function() {
	p.setFlashMode( android.hardware.Camera.Parameters.FLASH_MODE_TORCH );
	camera.setParameters( p );
	camera.startPreview();
};
flashlight.off = function() {
	p.setFlashMode( android.hardware.Camera.Parameters.FLASH_MODE_OFF );
	camera.setParameters( p );
	camera.stopPreview();
};

module.exports = flashlight;
