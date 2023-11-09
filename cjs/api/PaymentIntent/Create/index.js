"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentIntentCreate = void 0;
const Request_1 = require("../../Request");
const url_1 = require("../../../url");
const validator_1 = require("./validator");
const parse_1 = require("./parse");
const onPaymentIntentCreate = async (data) => {
    const validate = (0, validator_1.onPaymentIntentCreateValidatorProps)(data);
    if (validate !== true) {
        return validate;
    }
    const result = await (0, Request_1.onRequest)({
        url: url_1.URL + `/payments`,
        method: "post",
        headers: {
            Authorization: `Passcode ${data.token}`,
        },
        data: {
            ...(0, parse_1.onPaymentIntentCreateParseProps)(data),
        },
    });
    return result;
};
exports.onPaymentIntentCreate = onPaymentIntentCreate;
//# sourceMappingURL=index.js.map