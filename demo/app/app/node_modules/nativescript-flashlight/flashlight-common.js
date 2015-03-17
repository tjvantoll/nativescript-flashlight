var flashlight = {
	_on: false,
	toggle: function() {
		if ( flashlight._on ) {
			flashlight.off();
		} else {
			flashlight.on();
		}
		flashlight._on = !flashlight._on;
	},
	isOn: function() {
		return flashlight._on;
	}
};

module.exports = flashlight;
