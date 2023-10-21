import { WorldLineConnectSdk } from "../ConnectSdk";
import { WorldLineConfigProps } from "../Config";

export class WorldLineBase extends WorldLineConnectSdk {
    constructor(config: WorldLineConfigProps) {
        super(config);
    }
}
