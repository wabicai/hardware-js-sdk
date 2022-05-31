import { BaseMethod } from './BaseMethod';

import { UI_REQUEST } from '../constants/ui-request';
import { DataManager } from '../data-manager';

export default class CheckBLEFirmwareRelease extends BaseMethod {
  init() {
    this.allowDeviceMode = [...this.allowDeviceMode, UI_REQUEST.BOOTLOADER];
  }

  run() {
    const firmwareStatus = DataManager.getBLEFirmwareStatus(this.device.features);
    return Promise.resolve(firmwareStatus);
  }
}