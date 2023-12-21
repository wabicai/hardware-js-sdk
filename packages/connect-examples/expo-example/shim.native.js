/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';
if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (const p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p];
    }
  }
}

process.browser = false;
if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer;

// global.location = global.location || { port: 80 }
const isDev = typeof __DEV__ === 'boolean' && __DEV__;
// process.env['NODE_ENV'] = isDev ? 'development' : 'production'
if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : '';
}

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
if (typeof crypto === 'undefined') {
  try {
    shimsLog('crypto');
    // eslint-disable-next-line no-const-assign
    global.crypto = require('crypto');
  } catch (error) {
    console.error(error);
  }
}