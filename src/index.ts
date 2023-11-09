import { onPaymentMethodCreate } from "./api/PaymentMethod";
import { onPaymentMethodCreateProps } from "./api/PaymentMethod/Create/interface";

import { onPaymentIntentCreate } from "./api/PaymentIntent";
import { onPaymentIntentCreateProps } from "./api/PaymentIntent/Create/interface";
interface WorldlineProps {
    merchant_account_id: string;
    passcode: string;
}
class Worldline {
    private token: string;

    constructor(data: WorldlineProps) {
        this.token = btoa(data.merchant_account_id + ":" + data.passcode);
    }

    public async onPaymentMethodCreate(
        data: Omit<onPaymentMethodCreateProps, "token">,
    ) {
        return await onPaymentMethodCreate({
            token: this.token,
            ...data,
        });
    }

    public async onPaymentIntentCreate(
        data: Omit<onPaymentIntentCreateProps, "token">,
    ) {
        return await onPaymentIntentCreate({
            token: this.token,
            ...data,
        });
    }
}

export const WL: (data: WorldlineProps) => Worldline = (data) =>
    new Worldline(data);
