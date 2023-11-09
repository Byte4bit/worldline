"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequest = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const fenextjs_error_1 = require("fenextjs-error");
const onRequest = async (config) => {
    try {
        const response = await (0, axios_1.default)(config);
        return response.data;
    }
    catch (error) {
        const errorData = error?.response?.data ?? error?.response ?? error;
        const result = new fenextjs_error_1.ErrorFenextjs({
            data: {
                error: errorData,
                send: config,
            },
            message: `${errorData?.message ?? errorData}`,
        });
        return result;
    }
};
exports.onRequest = onRequest;
//# sourceMappingURL=index.js.map