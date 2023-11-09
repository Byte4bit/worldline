"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentMethodCreate = void 0;
const Request_1 = require("../../Request");
const url_1 = require("../../../url");
const validator_1 = require("./validator");
const parse_1 = require("./parse");
const onPaymentMethodCreate = async (data) => {
    const validate = (0, validator_1.onPaymentMethodCreateValidatorProps)(data);
    if (validate !== true) {
        return validate;
    }
    const result = await (0, Request_1.onRequest)({
        url: url_1.URL + `/profiles`,
        method: "post",
        headers: {
            Authorization: `Passcode ${data.token}`,
        },
        data: {
            ...(0, parse_1.onPaymentMethodCreateParseProps)(data),
        },
    });
    return result;
};
exports.onPaymentMethodCreate = onPaymentMethodCreate;
//# sourceMappingURL=index.js.map