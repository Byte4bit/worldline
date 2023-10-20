import { WorldLineBase } from "./Base";
import { WorldLineConfigProps } from "./Config";
import { WorldLinePayment } from "./Actions/Payment";
import { WorldLineCustomer } from "./Actions/Customer";
import { WorldLineSubscription } from "./Actions/Subscription";
export class WorldLine extends WorldLineBase {
    public payment: WorldLinePayment;
    public customer: WorldLineCustomer;
    public subscription: WorldLineSubscription;

    constructor(config: WorldLineConfigProps) {
        super(config);
        this.customer = new WorldLineCustomer(this);
        this.payment = new WorldLinePayment(this);
        this.subscription = new WorldLineSubscription(this);
    }
}

export const __WorldLine = (config: WorldLineConfigProps) => {
    const c = new WorldLine(config);
    const { payment, customer, subscription } = c;
    return { payment, customer, subscription };
};
