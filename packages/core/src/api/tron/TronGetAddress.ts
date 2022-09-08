import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams } from '../helpers/paramsValidator';
import { TronGetAddressParams, TronAddress } from '../../types';
import { TronGetAddress as HardwareTronGetAddress } from '@onekeyfe/hd-transport';

export default class TronGetAddress extends BaseMethod<HardwareTronGetAddress[]> {
  hasBundle = false;

  init() {
    this.checkDeviceId = true;
    this.allowDeviceMode = [...this.allowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = !!this.payload?.bundle;
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    // check payload
    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    // init params
    this.params = [];
    payload.bundle.forEach((batch: TronGetAddressParams) => {
      const addressN = validatePath(batch.path, 3);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'showOnOneKey', type: 'boolean' },
      ]);

      const showOnOneKey = batch.showOnOneKey ?? true;

      this.params.push({
        address_n: addressN,
        show_display: showOnOneKey,
      });
    });
  }

  getVersionRange() {
    return {
      model_mini: {
        min: '2.4.0',
      },
    };
  }

  async run() {
    const responses: TronAddress[] = [];

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall('TronGetAddress', 'TronAddress', {
        ...param,
      });

      const { address } = res.message;

      responses.push({
        path: serializedPath(param.address_n),
        address,
      });
    }

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}