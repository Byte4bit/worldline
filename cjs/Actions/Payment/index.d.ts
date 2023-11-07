import { WorldlineBase } from "../../Base";
import { WorldlinePaymentProps } from "./Interface";
export declare class WorldlinePayment {
    private worldline;
    constructor(worldline: WorldlineBase);
    onCreatePaymentIntent: WorldlinePaymentProps["onCreateIntent"]["function"];
}
