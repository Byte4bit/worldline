import { onPaymentMethodCreateFunctionParseProps } from "./interface";

export const onPaymentMethodCreateParseProps: onPaymentMethodCreateFunctionParseProps =
    ({ token, ...data }) => {
        token;
        const card = data.card as any;
        if (card) {
            card.expiry_month = card.expiry_month.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                maximumFractionDigits: 0,
            });
            card.expiry_year = card.expiry_year.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                maximumFractionDigits: 0,
            });
        }
        return {
            ...data,
            card,
        };
    };
