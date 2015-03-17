# NativeScript Flashlight

A flashlight module for use in NativeScript apps for Android and iOS.

## Installation

Run `npm install nativescript-flashlight --save` from your project's inner `app` directory:

```
.
├── app
│   ├── app <------------------------------ run npm install from here
│   │   ├── app.css
│   │   ├── app.js
│   │   ├── bootstrap.js
│   │   ├── main-page.js
│   │   ├── main-page.xml
│   │   ├── node_modules
│   │   │   └── nativescript-flashlight <-- The install will place the module's code here
│   │   │       └── ...
│   │   └── package.json <----------------- The install will register “nativescript-flashlight” as a dependency here
│   └── tns_modules
│       └── ...
└── platforms
    ├── android
    └── ios
```

## Usage

To use the flashlight module you must first `require()` it from your project's `node_modules` directory:

```
var flashlight = require( "./node_modules/nativescript-flashlight/flashlight" );
```

After you have a reference to the module you can then call its `on()`, `off()`, and `toggle()` methods. For example, the code below turns your device's flashlight on:

```
// my-page.js
var flashlight = require( "/path/to/node_modules/nativescript-flashlight" );
flashlight.on();
```

## Examples

The code below creates a button that toggles the device's flashlight:

```
<!-- my-page.xml -->
<Page loaded="pageLoaded">
    <StackLayout>
        <Button text="{{ flashlightState }}" tap="{{ toggleFlashlight }}" />
    </StackLayout>
</Page>
```

```
// my-page.js
var flashlight = require( "./flashlight" );
var observable = require( "data/observable" );
var viewModel = new observable.Observable();

// Set the initial text of the button
viewModel.set( "flashlightState", "Turn on" );

// A tap handle for the page's button. Toggle the state of the flashlight
// and the button's text
viewModel.toggleFlashlight = function() {
    flashlight.toggle();
    viewModel.set( "flashlightState", ( flashlight.isOn() ? "Turn off" : "Turn on" ) );
};

function pageLoaded( args ) {
    var page = args.object;
    page.bindingContext = viewModel;
}

exports.pageLoaded = pageLoaded;
```