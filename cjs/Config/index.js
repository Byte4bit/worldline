"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldlineConfig = void 0;
const Url_1 = require("../Url");
class WorldlineConfig extends Url_1.WorldlineUrl {
    config;
    constructor(config) {
        super(config);
        this.config = config;
    }
}
exports.WorldlineConfig = WorldlineConfig;
//# sourceMappingURL=index.js.map