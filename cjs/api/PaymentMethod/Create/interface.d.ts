import { ErrorFenextjs } from "fenextjs-error";
import { ResultApi } from "../../../interface/Result";
export type onPaymentMethodCreateProps = {
    token: string;
    customer_code: string;
    card: {
        name: string;
        number: string;
        expiry_month: string;
        expiry_year: string;
        cvd: string;
    };
    billing: {
        name: string;
        address_line1: string;
        address_line2: string;
        city: string;
        email_address: string;
        province: string;
        country: string;
        postal_code: string;
    };
};
export type onPaymentMethodCreateSendProps = {
    customer_code: string;
    card: {
        name: string;
        number: string;
        expiry_month: string;
        expiry_year: string;
        cvd: string;
    };
    billing: {
        name: string;
        address_line1: string;
        address_line2: string;
        city: string;
        email_address: string;
        province: string;
        country: string;
        postal_code: string;
    };
};
export type onPaymentMethodCreateFunctionParseProps = (data: onPaymentMethodCreateProps) => onPaymentMethodCreateSendProps;
export type onPaymentMethodCreateResult = ResultApi & {
    customer_code: string;
};
export type onPaymentMethodCreateFunctionResult = Promise<onPaymentMethodCreateResult | ErrorFenextjs>;
export type onPaymentMethodCreateFunction = (data: onPaymentMethodCreateProps) => onPaymentMethodCreateFunctionResult;
