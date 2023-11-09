"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentIntentCreateValidatorProps = exports.onPaymentIntentCreateValidator = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.onPaymentIntentCreateValidator = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("payment-intent-create")
    .isObject({
    token: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    amount: (0, fenextjs_validator_1.FenextjsValidator)().isNumber().isRequired().isMin(0),
    payment_profile: (0, fenextjs_validator_1.FenextjsValidator)()
        .isObject({
        customer_code: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        card_id: (0, fenextjs_validator_1.FenextjsValidator)().isNumber().isRequired(),
    })
        .isRequired(),
});
const onPaymentIntentCreateValidatorProps = (data) => {
    return exports.onPaymentIntentCreateValidator.onValidate(data);
};
exports.onPaymentIntentCreateValidatorProps = onPaymentIntentCreateValidatorProps;
//# sourceMappingURL=validator.js.map