import { BaseMethod } from './BaseMethod';

import { DataManager } from '../data-manager';

export default class CheckFirmwareRelease extends BaseMethod {
  init() {}

  run() {
    const firmwareStatus = DataManager.getFirmwareStatus(this.device.features);
    return Promise.resolve(firmwareStatus);
  }
}