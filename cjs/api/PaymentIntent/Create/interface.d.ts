import { ErrorFenextjs } from "fenextjs-error";
import { ResultApi } from "../../../interface/Result";
export type onPaymentIntentCreateProps = {
    token: string;
    amount: number;
    payment_profile: {
        complete?: boolean;
        customer_code: string;
        card_id: number;
    };
};
export type onPaymentIntentCreateSendProps = {
    amount: number;
    payment_profile: {
        complete?: boolean;
        customer_code: string;
        card_id: number;
    };
};
export type onPaymentIntentCreateFunctionParseProps = (data: onPaymentIntentCreateProps) => onPaymentIntentCreateSendProps;
export type onPaymentIntentCreateResult = ResultApi & {
    customer_code: string;
};
export type onPaymentIntentCreateFunctionResult = Promise<onPaymentIntentCreateResult | ErrorFenextjs>;
export type onPaymentIntentCreateFunction = (data: onPaymentIntentCreateProps) => onPaymentIntentCreateFunctionResult;
