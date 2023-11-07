"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldlineAuth = void 0;
const Request_1 = require("../Request");
class WorldlineAuth extends Request_1.WorldlineRequest {
    constructor(config) {
        super(config);
    }
    onLoadToken = async () => {
        this.token = btoa(this.config.merchant_account_id + ":" + this.config.passcode);
    };
    onRequest = async (config, options) => {
        if (options?.validateToken) {
            await this?.onLoadToken();
        }
        return await (0, Request_1.Request)({
            ...config,
            url: `${this.url}${config.url}`,
            headers: {
                ...config.headers,
                ["worldline-account"]: this.config.merchant_account_id,
                ...(this.token
                    ? {
                        ["Authorization"]: `Passcode ${this.token}`,
                    }
                    : {}),
            },
        });
    };
}
exports.WorldlineAuth = WorldlineAuth;
//# sourceMappingURL=index.js.map