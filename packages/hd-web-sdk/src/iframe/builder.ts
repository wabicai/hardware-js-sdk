import { ERRORS, Deferred, create as createDeferred } from '@onekeyfe/hd-core';
import { getOrigin } from '../utils/urlUtils';

/* eslint-disable import/no-mutable-exports */
export let instance: HTMLIFrameElement | null;
export let origin: string;
export let initPromise: Deferred<void> = createDeferred();
export let timeout = 0;
/* eslint-disable import/no-mutable-exports */

export const init = async (settings: any) => {
  initPromise = createDeferred();
  const existedFrame = document.getElementById('onekey-connect') as HTMLIFrameElement;
  if (existedFrame) {
    instance = existedFrame;
  } else {
    instance = document.createElement('iframe');
    instance.frameBorder = '0';
    instance.width = '0px';
    instance.height = '0px';
    instance.style.position = 'absolute';
    instance.style.display = 'none';
    instance.style.border = '0px';
    instance.style.width = '0px';
    instance.style.height = '0px';
    instance.id = 'onekey-connect';
  }

  const manifest = `version=${settings.version as string}`;
  const src = `${settings.iframeSrc as string}?${manifest}`;

  instance.setAttribute('src', src);

  origin = getOrigin(instance.src);
  timeout = window.setTimeout(() => {
    initPromise.reject(ERRORS.TypedError('Init_IframeTimeout'));
  }, 10000);

  const onLoad = () => {
    if (!instance) {
      initPromise.reject(ERRORS.TypedError('Init_IframeBlocked'));
      return;
    }

    instance.contentWindow?.postMessage(
      {
        type: 'iframe-init',
        payload: {
          settings: { ...settings },
        },
      },
      origin
    );

    instance.onload = null;
  };

  // IE hack
  // @ts-ignore
  if (instance.attachEvent) {
    // @ts-ignore
    instance.attachEvent('onload', onLoad);
  } else {
    instance.onload = onLoad;
  }
  // inject iframe into host document body
  if (document.body) {
    document.body.appendChild(instance);
  }

  try {
    await initPromise.promise;
  } catch (e) {
    if (instance) {
      if (instance.parentNode) {
        instance.parentNode.removeChild(instance);
      }
      instance = null;
    }
    throw e;
  } finally {
    window.clearTimeout(timeout);
    timeout = 0;
  }
};

export const dispose = () => {
  if (instance && instance.parentNode) {
    try {
      instance.parentNode.removeChild(instance);
    } catch (e) {
      // do nothing
    }
  }
  instance = null;
  timeout = 0;
};