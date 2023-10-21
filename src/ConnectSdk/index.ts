import { ConnectSdk } from "connect-sdk-nodejs/lib/model";
import { WorldLineConfig, WorldLineConfigProps } from "../Config";
import connectSdk from "connect-sdk-nodejs";

export class WorldLineConnectSdk extends WorldLineConfig {
    public sdk: ConnectSdk;
    constructor(config: WorldLineConfigProps) {
        super(config);
        this.sdk = connectSdk;
        this.sdk.init({
            host: this.url,
            scheme: "https",
            port: 443,
            enableLogging: true, // defaults to false
            // logger: logger, // if undefined console.log will be used
            apiKeyId: this.config.apiKeyId,
            secretApiKey: this.config.secretApiKey,
            integrator: this.config.integrator,
        });
    }
}
