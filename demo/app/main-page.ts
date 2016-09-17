import { EventData, Observable, PropertyChangeData } from "data/observable";
import { Page } from "ui/page";
import { Slider } from "ui/slider";
import * as flashlight from "nativescript-flashlight";

let viewModel = new Observable();
viewModel.set("flashlightState", "Turn on");
viewModel.set("intensity", 50);

export function toggleFlashlight(arg) {
  if (flashlight.isAvailable()) {
    flashlight.toggle({
      intensity: viewModel.get("intensity") / 100
    });
    viewModel.set("flashlightState", (flashlight.isOn() ? "Turn off" : "Turn on"));
  } else {
    alert("A flashlight is not available on your device.");
  }
};

export function pageLoaded(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = viewModel;

  let slider = <Slider>page.getViewById("intensitySlider");
  slider.on("propertyChange", (args: PropertyChangeData) => {
    console.log("Intensity set to: " + args.value);
  });
}
