"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldlineUrl = void 0;
class WorldlineUrl {
    url_sandbox = "https://sandbox-api.worldline.com";
    url_production = "https://api.worldline.com";
    url = "";
    constructor(config) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
exports.WorldlineUrl = WorldlineUrl;
//# sourceMappingURL=index.js.map