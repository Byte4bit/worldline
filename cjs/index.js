"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__WorldLine = exports.WorldLine = void 0;
const Base_1 = require("./Base");
// import { WorldLinePayment } from "./Actions/Payment";
// import { WorldLineCustomer } from "./Actions/Customer";
// import { WorldLineSubscription } from "./Actions/Subscription";
class WorldLine extends Base_1.WorldLineBase {
    // public payment: WorldLinePayment;
    // public customer: WorldLineCustomer;
    // public subscription: WorldLineSubscription;
    constructor(config) {
        super(config);
        // this.customer = new WorldLineCustomer(this);
        // this.payment = new WorldLinePayment(this);
        // this.subscription = new WorldLineSubscription(this);
    }
}
exports.WorldLine = WorldLine;
const __WorldLine = (config) => {
    const c = new WorldLine(config);
    const { sdk } = c;
    return { sdk };
};
exports.__WorldLine = __WorldLine;
//# sourceMappingURL=index.js.map