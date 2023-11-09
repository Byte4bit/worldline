import { ErrorFenextjs } from "fenextjs-error";
import { ResultApi } from "../../../interface/Result";

export type onPaymentIntentCreateProps = {
    token: string;

    amount: number;

    payment_method: "payment_profile" | "card";

    payment_profile?: {
        complete?: boolean;
        customer_code: string;
    };
    card?: {
        number: string;
        name: string;
        expiry_month: number;
        expiry_year: number;
        cvd: string;
    };
};

export type onPaymentIntentCreateSendProps = {
    amount: number;

    payment_method: "payment_profile" | "card";

    payment_profile?: {
        complete?: boolean;
        customer_code: string;
    };
    card?: {
        number: string;
        name: string;
        expiry_month: string;
        expiry_year: string;
        cvd: string;
    };
};

export type onPaymentIntentCreateFunctionParseProps = (
    data: onPaymentIntentCreateProps,
) => onPaymentIntentCreateSendProps;

export type onPaymentIntentCreateResult = ResultApi & {
    customer_code: string;
};

export type onPaymentIntentCreateFunctionResult = Promise<
    onPaymentIntentCreateResult | ErrorFenextjs
>;

export type onPaymentIntentCreateFunction = (
    data: onPaymentIntentCreateProps,
) => onPaymentIntentCreateFunctionResult;
