var application = require("application");
var flashlight = require("./flashlight-common");
var camera;
var parameters;

flashlight.isAvailable = function() {
	var packageManager = application.android.currentContext.getPackageManager();
	return packageManager.hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA_FLASH);
}
flashlight.on = function() {
	this._checkAvailability();
	if (!camera) {
		camera = android.hardware.Camera.open(0);
		parameters = camera.getParameters();
	}
	parameters.setFlashMode(camera.Parameters.FLASH_MODE_TORCH);
	camera.setParameters(parameters);
	camera.startPreview();
};
flashlight.off = function() {
	parameters.setFlashMode(camera.Parameters.FLASH_MODE_OFF);
	camera.setParameters(parameters);
	camera.stopPreview();
	camera.release();
};

module.exports = flashlight;
