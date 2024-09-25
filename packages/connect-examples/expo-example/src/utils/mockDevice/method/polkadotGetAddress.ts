import { PolkadotGetAddressParams } from '@onekeyfe/hd-core';

import { hdLedger, encodeAddress } from '@polkadot/util-crypto';

const networks = {
  kusama: 2,
  polkadot: 0,
  astar: 5,
  westend: 42,
  manta: 77,
  joystream: 126,
};

export default function polkadotGetAddress(
  connectId: string,
  deviceId: string,
  params: PolkadotGetAddressParams & {
    mnemonic: string;
    passphrase?: string;
  },
) {
  const { path, network, prefix, mnemonic, passphrase } = params;

  // @ts-expect-error
  const secret = hdLedger(mnemonic, path);
  const address = encodeAddress(secret.publicKey, prefix);

  return {
    success: true,
    payload: {
      address,
      path,
    },
  };
}
