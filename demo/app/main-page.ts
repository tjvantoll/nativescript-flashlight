import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import * as flashlight from "nativescript-flashlight";

let viewModel = new Observable();
viewModel.set("flashlightState", "Turn on");

export function toggleFlashlight() {
  if (flashlight.isAvailable()) {
    flashlight.toggle();
    viewModel.set("flashlightState", (flashlight.isOn() ? "Turn off" : "Turn on"));
  } else {
    alert("A flashlight is not available on your device.");
  }
};

export function pageLoaded(args: EventData) {
  let page = <Page>args.object;
  page.bindingContext = viewModel;
}
