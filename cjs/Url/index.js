"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldLineUrl = void 0;
class WorldLineUrl {
    url_sandbox = "https://world.preprod.api-ingenico.com";
    url_production = "https://world.api-ingenico.com";
    url = "";
    constructor(config) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
exports.WorldLineUrl = WorldLineUrl;
//# sourceMappingURL=index.js.map