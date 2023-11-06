"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__Worldline = exports.Worldline = void 0;
const Base_1 = require("./Base");
const Payment_1 = require("./Actions/Payment");
class Worldline extends Base_1.WorldlineBase {
    payment;
    constructor(config) {
        super(config);
        this.payment = new Payment_1.WorldlinePayment(this);
    }
}
exports.Worldline = Worldline;
const __Worldline = (config) => {
    const c = new Worldline(config);
    const { payment } = c;
    return { payment };
};
exports.__Worldline = __Worldline;
//# sourceMappingURL=index.js.map