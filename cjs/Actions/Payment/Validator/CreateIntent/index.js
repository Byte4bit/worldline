"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPaymentCreateIntent = void 0;
const Currency_1 = require("../../../../Const/Currency");
const PaymentMethod_1 = require("../../../../Const/PaymentMethod");
const fenextjs_validator_1 = require("fenextjs-validator");
exports.ValidatorPaymentCreateIntent = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("create-payment-intent")
    .isObject({
    amount: (0, fenextjs_validator_1.FenextjsValidator)()
        .isNumber()
        .isRequired()
        .isMinOrEqual(1)
        .isMaxOrEqual(99999999),
    currency: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(Currency_1.CurrencyConst),
    payment_method_types: (0, fenextjs_validator_1.FenextjsValidator)()
        .isArray((0, fenextjs_validator_1.FenextjsValidator)()
        .isRequired()
        .isString()
        .isEqual(PaymentMethod_1.PaymentMethodConst))
        .isMaxOrEqual(1)
        .isRequired(),
    payment_method_id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
//# sourceMappingURL=index.js.map