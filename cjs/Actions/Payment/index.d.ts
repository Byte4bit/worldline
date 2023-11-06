import { WorldlineBase } from "../../Base";
import { WorldlinePaymentProps } from "./Interface";
export declare class WorldlinePayment {
    private worldline;
    constructor(worldline: WorldlineBase);
    onCreatePaymentMethod: WorldlinePaymentProps["onCreateMethod"]["function"];
    onCreatePaymentIntent: WorldlinePaymentProps["onCreateIntent"]["function"];
    onAttachCustomerPaymentMethod: WorldlinePaymentProps["onAttachCustomer"]["function"];
}
