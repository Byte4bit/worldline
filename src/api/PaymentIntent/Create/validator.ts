import { FenextjsValidator } from "fenextjs-validator";
import { onPaymentIntentCreateProps } from "./interface";

export const onPaymentIntentCreateValidator =
    FenextjsValidator<onPaymentIntentCreateProps>()
        .setName("payment-intent-create")
        .isObject({
            token: FenextjsValidator().isString().isRequired(),

            amount: FenextjsValidator().isNumber().isRequired().isMin(0),

            payment_profile: FenextjsValidator()
                .isObject({
                    customer_code: FenextjsValidator().isString().isRequired(),
                    card_id: FenextjsValidator().isNumber().isRequired(),
                })
                .isRequired(),
        });

export const onPaymentIntentCreateValidatorProps = (
    data: onPaymentIntentCreateProps,
) => {
    return onPaymentIntentCreateValidator.onValidate(data);
};
