"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPaymentAttachCustomer = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.ValidatorPaymentAttachCustomer = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("attach-customer-payment")
    .isRequired()
    .isObject({
    id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    customer_id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
//# sourceMappingURL=index.js.map