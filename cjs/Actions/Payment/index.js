"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldlinePayment = void 0;
const Validator_1 = require("./Validator");
class WorldlinePayment {
    worldline;
    constructor(worldline) {
        this.worldline = worldline;
    }
    onCreatePaymentIntent = async (data) => {
        const valid = Validator_1.Validators.ValidatorPaymentCreateIntent.onValidate(data);
        if (valid !== true) {
            return valid;
        }
        const url = "/v1/payment-intents";
        return await this.worldline.onRequest({
            url,
            data,
            method: "post",
        }, {
            validateToken: true,
        });
    };
}
exports.WorldlinePayment = WorldlinePayment;
//# sourceMappingURL=index.js.map