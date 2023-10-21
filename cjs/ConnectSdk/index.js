"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldLineConnectSdk = void 0;
const tslib_1 = require("tslib");
const Config_1 = require("../Config");
const connect_sdk_nodejs_1 = tslib_1.__importDefault(require("connect-sdk-nodejs"));
class WorldLineConnectSdk extends Config_1.WorldLineConfig {
    sdk;
    constructor(config) {
        super(config);
        this.sdk = connect_sdk_nodejs_1.default;
        this.sdk.init({
            host: this.url,
            scheme: "https",
            port: 443,
            enableLogging: true,
            // logger: logger, // if undefined console.log will be used
            apiKeyId: this.config.apiKeyId,
            secretApiKey: this.config.secretApiKey,
            integrator: this.config.integrator,
        });
    }
}
exports.WorldLineConnectSdk = WorldLineConnectSdk;
//# sourceMappingURL=index.js.map