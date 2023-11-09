import { onPaymentMethodCreateFunctionParseProps } from "./interface";

export const onPaymentMethodCreateParseProps: onPaymentMethodCreateFunctionParseProps =
    ({ token, ...data }) => {
        token;
        return {
            ...data,
        };
    };
