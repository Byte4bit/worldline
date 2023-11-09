"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onPaymentIntentCreateValidatorProps = exports.onPaymentIntentCreateValidator = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.onPaymentIntentCreateValidator = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("payment-intent-create")
    .isObject({
    token: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    amount: (0, fenextjs_validator_1.FenextjsValidator)().isNumber().isRequired().isMin(0),
    payment_method: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(["payment_profile", "card"]),
    payment_profile: (0, fenextjs_validator_1.FenextjsValidator)().isWhen({
        key: "payment_method",
        is: (0, fenextjs_validator_1.FenextjsValidator)().isEqual("payment_profile"),
        then: (0, fenextjs_validator_1.FenextjsValidator)()
            .setName("payment-intent-create.payment_profile")
            .isObject({
            customer_code: (0, fenextjs_validator_1.FenextjsValidator)()
                .isString()
                .isRequired(),
        })
            .isRequired(),
    }),
    card: (0, fenextjs_validator_1.FenextjsValidator)().isWhen({
        key: "payment_method",
        is: (0, fenextjs_validator_1.FenextjsValidator)().isEqual("card"),
        then: (0, fenextjs_validator_1.FenextjsValidator)()
            .setName("payment-intent-create.card")
            .isObject({
            number: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
            name: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
            expiry_month: (0, fenextjs_validator_1.FenextjsValidator)()
                .isNumber()
                .isRequired()
                .isMinOrEqual(1)
                .isMaxOrEqual(12),
            expiry_year: (0, fenextjs_validator_1.FenextjsValidator)()
                .isNumber()
                .isRequired()
                .isMinOrEqual(new Date().getFullYear() % 100)
                .isMaxOrEqual(99),
            cvd: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
        })
            .isRequired(),
    }),
});
const onPaymentIntentCreateValidatorProps = (data) => {
    return exports.onPaymentIntentCreateValidator.onValidate(data);
};
exports.onPaymentIntentCreateValidatorProps = onPaymentIntentCreateValidatorProps;
//# sourceMappingURL=validator.js.map