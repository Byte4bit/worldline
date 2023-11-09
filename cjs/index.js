"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WL = void 0;
const PaymentMethod_1 = require("./api/PaymentMethod");
class Worldline {
    token;
    constructor(data) {
        this.token = btoa(data.merchant_account_id + ":" + data.passcode);
    }
    async onPaymentMethodCreate(data) {
        return await (0, PaymentMethod_1.onPaymentMethodCreate)({
            token: this.token,
            ...data,
        });
    }
}
const WL = (data) => new Worldline(data);
exports.WL = WL;
//# sourceMappingURL=index.js.map