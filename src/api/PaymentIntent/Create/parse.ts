import { onPaymentIntentCreateFunctionParseProps } from "./interface";

export const onPaymentIntentCreateParseProps: onPaymentIntentCreateFunctionParseProps =
    ({ token, ...data }) => {
        token;
        return {
            ...data,
        };
    };
