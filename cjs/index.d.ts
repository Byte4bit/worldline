import { WorldlineBase } from "./Base";
import { WorldlineConfigProps } from "./Config";
import { WorldlinePayment } from "./Actions/Payment";
export declare class Worldline extends WorldlineBase {
    payment: WorldlinePayment;
    constructor(config: WorldlineConfigProps);
}
export declare const __Worldline: (config: WorldlineConfigProps) => {
    payment: WorldlinePayment;
};
