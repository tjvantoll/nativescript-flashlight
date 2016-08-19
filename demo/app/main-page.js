"use strict";
var observable_1 = require("data/observable");
var flashlight = require("nativescript-flashlight");
var viewModel = new observable_1.Observable();
viewModel.set("flashlightState", "Turn on");
function toggleFlashlight() {
    if (flashlight.isAvailable()) {
        flashlight.toggle();
        viewModel.set("flashlightState", (flashlight.isOn() ? "Turn off" : "Turn on"));
    }
    else {
        alert("A flashlight is not available on your device.");
    }
}
exports.toggleFlashlight = toggleFlashlight;
;
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map