export type OneKeyDeviceInfo = {
  path: string;
};

export type OneKeyDeviceInfoWithSession = OneKeyDeviceInfo & {
  session?: string | null;
  debugSession?: string | null;
  debug: boolean;
};

export type AcquireInput = {
  path: string;
  previous?: string;
};

export type MessageFromOneKey = { type: string; message: Record<string, any> };

export type Transport = {
  enumerate(): Promise<Array<OneKeyDeviceInfoWithSession>>;
  listen(old?: Array<OneKeyDeviceInfoWithSession>): Promise<Array<OneKeyDeviceInfoWithSession>>;
  acquire(input: AcquireInput, debugLink: boolean): Promise<string>;
  release(session: string, onclose: boolean, debugLink: boolean): Promise<void>;
  configure(signedData: JSON | string): Promise<void>;
  call(
    session: string,
    name: string,
    data: Record<string, any>,
    debugLink: boolean,
  ): Promise<MessageFromOneKey>;
  post(session: string, name: string, data: Record<string, any>, debugLink: boolean): Promise<void>;
  read(session: string, debugLink: boolean): Promise<MessageFromOneKey>;

  // resolves when the transport can be used; rejects when it cannot
  init(debug?: boolean): Promise<void>;
  stop(): void;

  configured: boolean;
  version: string;
  name: string;
  activeName?: string;

  // webusb has a different model, where you have to
  // request device connection
  requestDevice: () => Promise<void>;
  requestNeeded: boolean;

  isOutdated: boolean;
  setBridgeLatestUrl(url: string): void;
  setBridgeLatestVersion(version: string): void;
};
