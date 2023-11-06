import { WorldlineBase } from "./Base";
import { WorldlineConfigProps } from "./Config";
import { WorldlinePayment } from "./Actions/Payment";
export class Worldline extends WorldlineBase {
    public payment: WorldlinePayment;

    constructor(config: WorldlineConfigProps) {
        super(config);
        this.payment = new WorldlinePayment(this);
    }
}

export const __Worldline = (config: WorldlineConfigProps) => {
    const c = new Worldline(config);
    const { payment } = c;
    return { payment };
};
