# NativeScript Flashlight Plugin

A plugin for using your device's flashlight in NativeScript Android and iOS apps.

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-flashlight
```

This command automatically installs the necessary files, as well as stores nativescript-flashlight as a dependency in your project's `package.json` file.

## Usage

To use the flashlight module you must first `require()` it:

```js
var flashlight = require("nativescript-flashlight");
```

After you have a reference to the module you can then call its `on()`, `off()`, and `toggle()` methods. For example, the code below turns your device's flashlight on:

```js
// my-page.js
var flashlight = require("nativescript-flashlight");
flashlight.on();
```

In most cases you'll want to wrap your `on()` call with a check of `isAvailable()`, to handle devices where a flashlight is not available:

```js
// my-page.js
var flashlight = require("nativescript-flashlight");
if (flashlight.isAvailable()) {
	flashlight.on();
} else {
	alert("A flashlight is not available on your device.");
}
```

## Examples

The code below creates a button that toggles the device's flashlight:

```xml
<!-- my-page.xml -->
<Page loaded="pageLoaded">
    <StackLayout>
        <Button text="{{ flashlightState }}" tap="{{ toggleFlashlight }}" />
    </StackLayout>
</Page>
```

```js
// my-page.js
var flashlight = require("nativescript-flashlight");
var observable = require("data/observable");
var viewModel = new observable.Observable();

// Set the initial text of the button
viewModel.set("flashlightState", "Turn on");

// A tap handle for the page's button. Toggle the state of the flashlight
// and the button's text
viewModel.toggleFlashlight = function() {
    if (flashlight.isAvailable()) {
        flashlight.toggle();
        viewModel.set("flashlightState", (flashlight.isOn() ? "Turn off" : "Turn on"));
    } else {
        alert("A flashlight is not available on your device.");
    }
};

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}

exports.pageLoaded = pageLoaded;
```
