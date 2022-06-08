import EventEmitter from 'events';
import HardwareSdk, {
  ConnectSettings,
  enableLog,
  initLog,
  parseConnectSettings,
  initCore,
  Core,
  createErrorMessage,
  CORE_EVENT,
  CoreMessage,
  ERRORS,
  Deferred,
  create as createDeferred,
  IFRAME,
} from '@onekeyfe/hd-core';
import ReactNativeTransport from '@onekeyfe/hd-transport-react-native';

const eventEmitter = new EventEmitter();
const Log = initLog('@onekey/hd-ble-sdk');

let _core: Core | undefined;
let _settings = parseConnectSettings();

let _messageID = 0;
export const messagePromises: { [key: number]: Deferred<any> } = {};

const dispose = () => {
  eventEmitter.removeAllListeners();
  _settings = parseConnectSettings();
};

function handleMessage() {}

async function postMessage(message: CoreMessage, usePromise = true) {
  if (!_core) {
    throw ERRORS.TypedError('Runtime', 'postMessage: _core not found');
  }

  if (usePromise) {
    _messageID++;
    messagePromises[_messageID] = createDeferred();
    // const { promise } = messagePromises[_messageID];
    const response = await _core.handleMessage({ ...message, id: `${_messageID}` });
    // return promise;
    return response;
  }

  _core.handleMessage(message);
}

const init = async (settings: Partial<ConnectSettings>) => {
  _settings = { ..._settings, ...settings, env: 'react-native' };

  enableLog(!!settings.debug);
  Log.debug('init');

  try {
    _core = await initCore(_settings, ReactNativeTransport);
    _core?.on(CORE_EVENT, handleMessage);
  } catch (error) {
    Log.error(createErrorMessage(error));
  }
};

const call = async (params: any) => {
  Log.debug('call: ', params);

  try {
    const response = await postMessage({ event: IFRAME.CALL, type: IFRAME.CALL, payload: params });
    if (response) {
      return response;
    }

    return createErrorMessage(ERRORS.TypedError('Call_NotResponse'));
  } catch (error) {
    Log.error('__call error: ', error);
    return createErrorMessage(error);
  }
};

const HardwareBleSdk = HardwareSdk({
  eventEmitter,
  init,
  call,
  dispose,
});

export default HardwareBleSdk;