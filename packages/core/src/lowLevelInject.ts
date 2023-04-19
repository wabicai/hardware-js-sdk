import { EventEmitter } from 'events';
import { CallMethod, CoreMessage } from './events';
import { CoreApi } from './types/api';
import { createCoreApi } from './inject';

type IAddHardwareGlobalEventListener = (coreMessage: CoreMessage) => void;

export interface LowLevelInjectApi {
  call: CallMethod;
  eventEmitter: EventEmitter;
  init: CoreApi['init'];
  dispose: CoreApi['dispose'];
  uiResponse: CoreApi['uiResponse'];
  cancel: CoreApi['cancel'];
  addHardwareGlobalEventListener: (listener: IAddHardwareGlobalEventListener) => void;
}

export type LowLevelCoreApi = Omit<CoreApi, 'on' | 'off'> & {
  addHardwareGlobalEventListener: (listener: IAddHardwareGlobalEventListener) => void;
};

export const lowLevelInject = ({
  call,
  cancel,
  dispose,
  eventEmitter,
  init,
  uiResponse,
  addHardwareGlobalEventListener,
}: LowLevelInjectApi): LowLevelCoreApi => {
  const api: LowLevelCoreApi = {
    addHardwareGlobalEventListener,
    removeAllListeners: type => {
      eventEmitter.removeAllListeners(type);
    },

    init,

    call,

    dispose,

    uiResponse,

    cancel,

    ...createCoreApi(call),
  };
  return api;
};