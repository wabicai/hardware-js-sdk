import EventEmitter from 'events';
import HardwareSdk, {
  ConnectSettings,
  Core,
  CORE_EVENT,
  CoreMessage,
  createErrorMessage,
  DEVICE,
  DEVICE_EVENT,
  enableLog,
  FIRMWARE_EVENT,
  getLogger,
  IFRAME,
  initCore,
  LOG_EVENT,
  LoggerNames,
  LowLevelCoreApi,
  parseConnectSettings,
  setLoggerPostMessage,
  UI_EVENT,
  UiResponseEvent,
} from '@onekeyfe/hd-core';
import { createDeferred, Deferred, ERRORS, HardwareErrorCode } from '@onekeyfe/hd-shared';
import type { LowlevelTransportSharedPlugin } from '@onekeyfe/hd-transport';
import HttpTransport from '@onekeyfe/hd-transport-http';
import WebusbTransport from '@onekeyfe/hd-transport-webusb';
import LowlevelTransport from '@onekeyfe/hd-transport-lowlevel';

const eventEmitter = new EventEmitter();
const Log = getLogger(LoggerNames.HdCommonConnectSdk);

let _core: Core | undefined;
let _settings = parseConnectSettings();

let _messageID = 0;
export const messagePromises: { [key: number]: Deferred<any> } = {};

const dispose = () => {
  eventEmitter.removeAllListeners();
  _settings = parseConnectSettings();
};

const uiResponse = (response: UiResponseEvent) => {
  if (!_core) {
    throw ERRORS.TypedError(HardwareErrorCode.NotInitialized);
  }
  const { type, payload } = response;
  _core.handleMessage({ event: UI_EVENT, type, payload } as CoreMessage);
};

const cancel = (connectId?: string) => {
  if (_core === undefined) return;
  _core.handleMessage({ event: IFRAME.CANCEL, type: IFRAME.CANCEL, payload: { connectId } });
};

function handleMessage(message: CoreMessage) {
  const { event } = message;
  if (!_core) {
    return;
  }

  if (event !== LOG_EVENT) {
    Log.debug('hd-common-connect-sdk handleMessage', message);
  }
  switch (event) {
    case UI_EVENT:
      // pass UI event up
      eventEmitter.emit(message.event, message);
      eventEmitter.emit(message.type, message.payload);
      break;
    case LOG_EVENT:
    case FIRMWARE_EVENT:
      eventEmitter.emit(message.event, message);
      break;
    case DEVICE_EVENT:
      if (
        (
          [DEVICE.CONNECT, DEVICE.DISCONNECT, DEVICE.FEATURES, DEVICE.SUPPORT_FEATURES] as string[]
        ).includes(message.type)
      ) {
        eventEmitter.emit(message.type, message.payload);
      }
      break;
    default:
      Log.log('No need to be captured message', message.event);
  }
}

async function postMessage(message: CoreMessage, usePromise = true) {
  if (!_core) {
    throw ERRORS.TypedError('postMessage: _core not found');
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

const init = async (
  settings: Partial<ConnectSettings>,
  _?: LowLevelCoreApi,
  plugin?: LowlevelTransportSharedPlugin
) => {
  _settings = { ..._settings, ...settings, env: settings.env ?? 'node' };

  enableLog(!!settings.debug);

  Log.debug('init');

  try {
    console.log(_settings.env);
    // const Transport = _settings.env === 'webusb' ? WebusbTransport : HttpTransport;
    let Transport: any;
    switch (_settings.env) {
      case 'webusb':
        Transport = WebusbTransport;
        break;
      case 'lowlevel':
        Transport = LowlevelTransport;
        break;
      default:
        Transport = HttpTransport;
    }
    _core = await initCore(_settings, Transport, plugin);
    _core?.on(CORE_EVENT, handleMessage);
    setLoggerPostMessage(handleMessage);

    return true;
  } catch (error) {
    Log.error(createErrorMessage(error));

    return false;
  }
};

const call = async (params: any) => {
  Log.debug('call: ', params);

  try {
    const response = await postMessage({ event: IFRAME.CALL, type: IFRAME.CALL, payload: params });
    if (response) {
      Log.debug('response: ', response);

      return response;
    }

    return createErrorMessage(ERRORS.TypedError(HardwareErrorCode.CallMethodNotResponse));
  } catch (error) {
    Log.error('__call error: ', error);
    return createErrorMessage(error);
  }
};

const updateSettings = () => Promise.resolve(true);

const HardwareCommonConnectSdk = HardwareSdk({
  eventEmitter,
  init,
  call,
  cancel,
  dispose,
  uiResponse,
  updateSettings,
});

export default HardwareCommonConnectSdk;
