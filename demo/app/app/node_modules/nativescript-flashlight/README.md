# NativeScript Flashlight

A flashlight module for use in NativeScript apps. Use `require()` to include the module and call its `on()`, `off()`, and `toggle()` methods to interact with the device's flashlight.

## Examples

* 1) Turn the flashlight on:

```
// my-page.js
var flashlight = require( "/path/to/node_modules/nativescript-flashlight" );
flashlight.on();
```

* 2) Toggle the flashlight when the user clicks a button:

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

viewModel.set( "flashlightState", "Turn on" );
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