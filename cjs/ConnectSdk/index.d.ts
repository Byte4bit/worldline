import { ConnectSdk } from "connect-sdk-nodejs/lib/model";
import { WorldLineConfig, WorldLineConfigProps } from "../Config";
export declare class WorldLineConnectSdk extends WorldLineConfig {
    sdk: ConnectSdk;
    constructor(config: WorldLineConfigProps);
}
