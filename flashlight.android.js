var platformModule = require("platform");
var application = require("application");
var flashlight = require("./flashlight-common");
var camera;
// Used when device has camera2 API
var appContext;
var cameraManager;
// Used when device lacks camera2 API
var parameters;

flashlight.isAvailable = function() {
	var packageManager = application.android.currentContext.getPackageManager();
	return packageManager.hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA_FLASH);
}
flashlight.hasCamera2API = function() {
	return platformModule.device.sdkVersion > 20;
}
flashlight.on = function() {
	this._checkAvailability();
	if (flashlight.hasCamera2API()) {
		if (!camera) {
			appContext = application.android.context;
			cameraManager = appContext.getSystemService(android.content.Context.CAMERA_SERVICE);
			camera = cameraManager.getCameraIdList()[0];
		}
		cameraManager.setTorchMode(camera, true);
	} else {
		if (!camera) {
			camera = android.hardware.Camera.open(0);
			parameters = camera.getParameters();
		}
		parameters.setFlashMode(camera.Parameters.FLASH_MODE_TORCH);
		camera.setParameters(parameters);
		camera.startPreview();
	}
};
flashlight.off = function() {
	if (flashlight.hasCamera2API()) {
		cameraManager.setTorchMode(camera, false);
	} else {
		parameters.setFlashMode(camera.Parameters.FLASH_MODE_OFF);
		camera.setParameters(parameters);
		camera.stopPreview();
		camera.release();
	}
};

module.exports = flashlight;
