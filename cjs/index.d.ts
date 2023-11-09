import { onPaymentMethodCreateProps } from "./api/PaymentMethod/Create/interface";
import { onPaymentIntentCreateProps } from "./api/PaymentIntent/Create/interface";
interface WorldlineProps {
    merchant_account_id: string;
    passcode: string;
}
declare class Worldline {
    private token;
    constructor(data: WorldlineProps);
    onPaymentMethodCreate(data: Omit<onPaymentMethodCreateProps, "token">): Promise<import("./api/PaymentMethod/Create/interface").onPaymentMethodCreateResult | import("fenextjs-error").ErrorFenextjs<any>>;
    onPaymentIntentCreate(data: Omit<onPaymentIntentCreateProps, "token">): Promise<import("./api/PaymentIntent/Create/interface").onPaymentIntentCreateResult | import("fenextjs-error").ErrorFenextjs<any>>;
}
export declare const WL: (data: WorldlineProps) => Worldline;
export {};
