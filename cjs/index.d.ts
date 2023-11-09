import { onPaymentMethodCreateProps } from "./api/PaymentMethod/Create/interface";
interface WorldlineProps {
    merchant_account_id: string;
    passcode: string;
}
declare class Worldline {
    private token;
    constructor(data: WorldlineProps);
    onPaymentMethodCreate(data: Omit<onPaymentMethodCreateProps, "token">): Promise<import("./api/PaymentMethod/Create/interface").onPaymentMethodCreateResult | import("fenextjs-error").ErrorFenextjs<any>>;
}
export declare const WL: (data: WorldlineProps) => Worldline;
export {};
