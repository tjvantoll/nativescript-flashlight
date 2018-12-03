export interface SwitchOnOptions {
  /**
   * Brightness setting, in the range 0.0 - 1.0, used on iOS only.
   * Default 1.0 (full brightness).
   */
  intensity?: number;
}

/**
 * Check if the device has flashlight capability.
 */
export function isAvailable();

/**
 * Check if the device’s flashlight is currently on.
 */
export function isOn();

/**
* Turn the flashlight ON.
*/
export function on(arg?: SwitchOnOptions);

/**
* Turn the flashlight OFF.
*/
export function off();

/**
* Toggle the state of the flashlight.
*/
export function toggle(arg?: SwitchOnOptions);
