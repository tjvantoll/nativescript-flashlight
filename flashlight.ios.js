var flashlight = require("./flashlight-common");
var device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);

flashlight.isAvailable = function() {
	return !!device;
};

flashlight.on = function(arg) {
	this._checkAvailability();

	var intensity = AVCaptureMaxAvailableTorchLevel;
	if (arg && arg.intensity) {
		var requestedIntensity = arg.intensity;
		if (requestedIntensity > 0.0 && requestedIntensity < 1.0) {
			intensity = requestedIntensity;
		}
	}

	device.lockForConfiguration(null);
  device.setTorchModeOnWithLevelError(intensity, null);
	device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOn;
	device.unlockForConfiguration();
};

flashlight.off = function() {
	device.lockForConfiguration(null);
	device.torchMode = AVCaptureTorchMode.AVCaptureTorchModeOff;
	device.flashMode = AVCaptureFlashMode.AVCaptureFlashModeOff;
	device.unlockForConfiguration();
};

module.exports = flashlight;
