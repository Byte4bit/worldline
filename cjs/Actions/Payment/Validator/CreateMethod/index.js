"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPaymentCreateMethod = exports.ValidatorPaymentCreateMethod_eft_debit = exports.ValidatorPaymentCreateMethod_card = exports.ValidatorPaymentCreateMethod_billing_details = exports.ValidatorPaymentCreateMethod_ach_debit = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.ValidatorPaymentCreateMethod_ach_debit = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("ach_debit")
    .isRequired()
    .isObject({
    account_holder_name: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMaxOrEqual(22),
    account_number: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMinOrEqual(4)
        .isMaxOrEqual(17),
    account_type: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(["checking", "savings"]),
    routing_number: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
exports.ValidatorPaymentCreateMethod_billing_details = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("billing_details")
    .isRequired()
    .isObject({
    address: (0, fenextjs_validator_1.FenextjsValidator)()
        .setName("address")
        .isRequired()
        .isObject({
        city: (0, fenextjs_validator_1.FenextjsValidator)()
            .isString()
            .isRequired()
            .isMaxOrEqual(40),
        country: (0, fenextjs_validator_1.FenextjsValidator)()
            .isString()
            .isRequired()
            .isLength(2),
        state: (0, fenextjs_validator_1.FenextjsValidator)()
            .isString()
            .isRequired()
            .isLength(2),
        street: (0, fenextjs_validator_1.FenextjsValidator)()
            .isString()
            .isRequired()
            .isMaxOrEqual(50),
        street2: (0, fenextjs_validator_1.FenextjsValidator)()
            .isString()
            .isRequired()
            .isMaxOrEqual(50),
        zip: (0, fenextjs_validator_1.FenextjsValidator)()
            .isString()
            .isRequired()
            .isMaxOrEqual(10),
    }),
    email: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    name: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    phone: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
exports.ValidatorPaymentCreateMethod_card = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("card")
    .isRequired()
    .isObject({
    exp_month: (0, fenextjs_validator_1.FenextjsValidator)()
        .isNumber()
        .isRequired()
        .isMinOrEqual(1)
        .isMaxOrEqual(12),
    exp_year: (0, fenextjs_validator_1.FenextjsValidator)()
        .isNumber()
        .isRequired()
        .isMinOrEqual(new Date().getFullYear())
        .isMaxOrEqual(9999),
    number: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    // cvc?:  FenextjsValidator().isString();
});
exports.ValidatorPaymentCreateMethod_eft_debit = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("eft_debit")
    .isRequired()
    .isObject({
    account_holder_name: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMaxOrEqual(22),
    account_number: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMinOrEqual(4)
        .isMaxOrEqual(12),
    institution_id: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isLength(3),
    transit_number: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isLength(5),
});
exports.ValidatorPaymentCreateMethod = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("create-payment-method")
    .isRequired()
    .isObject({
    type: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(["card", "ach_debit", "eft_debit"]),
    ach_debit: (0, fenextjs_validator_1.FenextjsValidator)().isWhen({
        key: "type",
        is: (0, fenextjs_validator_1.FenextjsValidator)().isEqual("ach_debit"),
        then: exports.ValidatorPaymentCreateMethod_ach_debit,
    }),
    card: (0, fenextjs_validator_1.FenextjsValidator)().isWhen({
        key: "type",
        is: (0, fenextjs_validator_1.FenextjsValidator)().isEqual("card"),
        then: exports.ValidatorPaymentCreateMethod_card,
    }),
    eft_debit: (0, fenextjs_validator_1.FenextjsValidator)().isWhen({
        key: "type",
        is: (0, fenextjs_validator_1.FenextjsValidator)().isEqual("eft_debit"),
        then: exports.ValidatorPaymentCreateMethod_eft_debit,
    }),
    billing_details: exports.ValidatorPaymentCreateMethod_billing_details,
});
//# sourceMappingURL=index.js.map