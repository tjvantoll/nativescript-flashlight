# NativeScript Flashlight Plugin
A plugin for using your device's flashlight in NativeScript Android and iOS apps.

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-flashlight.svg
[npm-url]:https://npmjs.org/package/nativescript-flashlight
[downloads-image]:http://img.shields.io/npm/dm/nativescript-flashlight.svg

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-flashlight
```

This command automatically installs the necessary files, as well as stores nativescript-flashlight as a dependency in your project's `package.json` file.

## Usage

To use the flashlight module you must first `require()` it:

```js
// JavaScript
var flashlight = require("nativescript-flashlight");
```

Or if you’re using TypeScript, `import` the module:

```typescript
// TypeScript
import * as flashlight from "nativescript-flashlight";
```

After you have a reference to the module you can then call its `on()`, `off()`, and `toggle()` methods. For example, the code below turns your device's flashlight on with an `intensity` setting of 25%.

The optional `intensity` is supported __only on iOS__ and is by default `1.0`, which is 100% brightness.

```js
// my-page.js
var flashlight = require("nativescript-flashlight");
flashlight.on({
    intensity: 0.25
});
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
        flashlight.toggle({
            intensity: 0.6 // optional, supported on iOS only (default: 1.0 which is 100% brightness)
        });
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
