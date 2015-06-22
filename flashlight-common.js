var flashlight = {
	_on: false,
	toggle: function() {
		if (flashlight._on) {
			flashlight.off();
		} else {
			flashlight.on();
		}
		flashlight._on = !flashlight._on;
	},
	isOn: function() {
		return flashlight._on;
	},
	_checkAvailability: function() {
		if (!this.isAvailable()) {
			throw new Error("A flashlight is not available on this device. " +
				"Check for availability with isAvailable().");
		}
	}
};

module.exports = flashlight;
