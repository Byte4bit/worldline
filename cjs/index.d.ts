import { WorldLineBase } from "./Base";
import { WorldLineConfigProps } from "./Config";
export declare class WorldLine extends WorldLineBase {
    constructor(config: WorldLineConfigProps);
}
export declare const __WorldLine: (config: WorldLineConfigProps) => {
    sdk: import("connect-sdk-nodejs/lib/model").ConnectSdk;
};
