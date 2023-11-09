"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentMethodCreateValidatorProps = exports.onPaymentMethodCreateValidator = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.onPaymentMethodCreateValidator = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("payment-method-create")
    .isObject({
    token: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    customer_code: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    card: (0, fenextjs_validator_1.FenextjsValidator)()
        .isObject({
        name: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        number: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        expiry_month: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        expiry_year: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        cvd: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    })
        .isRequired(),
    billing: (0, fenextjs_validator_1.FenextjsValidator)()
        .isObject({
        name: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        address_line1: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        // address_line2: FenextjsValidator().isString().isRequired(),
        city: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        email_address: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        province: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        country: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        postal_code: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    })
        .isRequired(),
});
const onPaymentMethodCreateValidatorProps = (data) => {
    return exports.onPaymentMethodCreateValidator.onValidate(data);
};
exports.onPaymentMethodCreateValidatorProps = onPaymentMethodCreateValidatorProps;
//# sourceMappingURL=validator.js.map