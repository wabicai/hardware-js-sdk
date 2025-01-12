import { ScdoSignTx as HardwareScdoSignTx, TypedCall, ScdoSignedTx } from '@onekeyfe/hd-transport';
import { bytesToHex } from '@noble/hashes/utils';
import { UI_REQUEST } from '../../constants/ui-request';
import { validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams } from '../helpers/paramsValidator';
import { ScdoSignTransactionParams } from '../../types';
import type { TypedResponseMessage } from '../../device/DeviceCommands';
import { formatAnyHex, stripHexStartZeroes } from '../helpers/hexUtils';

export default class ScdoSignTransaction extends BaseMethod<HardwareScdoSignTx> {
  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    // check payload
    validateParams(this.payload, [
      { name: 'path', required: true },
      { name: 'nonce', required: true },
      { name: 'gasPrice', required: true, type: 'string' },
      { name: 'gasLimit', required: true, type: 'string' },
      { name: 'to', required: true, type: 'string' },
      { name: 'value', required: true, type: 'string' },
      { name: 'timestamp', required: true, type: 'string' },
      { name: 'data', type: 'hexString' },
      { name: 'txType', type: 'number' },
    ]);

    const { path, nonce, gasPrice, gasLimit, to, value, timestamp, txType } = this
      .payload as ScdoSignTransactionParams;

    const addressN = validatePath(path, 3);

    // init params
    this.params = {
      address_n: addressN,
      nonce: stripHexStartZeroes(formatAnyHex(nonce)),
      gas_price: stripHexStartZeroes(formatAnyHex(gasPrice)),
      gas_limit: stripHexStartZeroes(formatAnyHex(gasLimit)),
      to,
      value: stripHexStartZeroes(formatAnyHex(value)),
      timestamp: timestamp ? stripHexStartZeroes(formatAnyHex(timestamp)) : undefined,
      tx_type: txType,
    };
  }

  getVersionRange() {
    return {
      model_touch: {
        min: '4.10.0',
      },
    };
  }

  chunkByteSize = 1024;

  processTxRequest = async (
    typedCall: TypedCall,
    res: TypedResponseMessage<'ScdoSignedTx'>,
    data: Buffer,
    offset = 0
  ): Promise<ScdoSignedTx> => {
    const { data_length } = res.message;

    if (!data_length) {
      // sign Done
      return res.message;
    }

    const payload = data.subarray(offset, offset + data_length);
    const newOffset = offset + payload.length;
    const resourceAckParams = {
      data_chunk: bytesToHex(payload),
    };

    const response = await typedCall('ScdoTxAck', 'ScdoSignedTx', {
      ...resourceAckParams,
    });

    return this.processTxRequest(typedCall, response, data, newOffset);
  };

  async run() {
    const typedCall = this.device.getCommands().typedCall.bind(this.device.getCommands());

    const rawData = this.payload?.data;
    const data = rawData && Buffer.from(stripHexStartZeroes(formatAnyHex(rawData)), 'hex');
    const offset = this.chunkByteSize;
    if (data && data.length > 0) {
      this.params.data_initial_chunk = bytesToHex(data.subarray(0, this.chunkByteSize));
      this.params.data_length = data.length;
    }

    const res = await typedCall('ScdoSignTx', ['ScdoSignedTx'], {
      ...this.params,
    });

    return this.processTxRequest(typedCall, res, data, offset);
  }
}
