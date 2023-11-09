import { FenextjsValidator } from "fenextjs-validator";
import { onPaymentIntentCreateProps } from "./interface";

export const onPaymentIntentCreateValidator =
    FenextjsValidator<onPaymentIntentCreateProps>()
        .setName("payment-intent-create")
        .isObject({
            token: FenextjsValidator().isString().isRequired(),

            amount: FenextjsValidator().isNumber().isRequired().isMin(0),

            payment_method: FenextjsValidator()
                .isString()
                .isRequired()
                .isEqual(["payment_profile", "card"]),

            payment_profile: FenextjsValidator().isWhen({
                key: "payment_method",
                is: FenextjsValidator().isEqual("payment_profile"),
                then: FenextjsValidator()
                    .setName("payment-intent-create.payment_profile")
                    .isObject({
                        customer_code: FenextjsValidator()
                            .isString()
                            .isRequired(),
                    })
                    .isRequired(),
            }),

            card: FenextjsValidator().isWhen({
                key: "payment_method",
                is: FenextjsValidator().isEqual("card"),
                then: FenextjsValidator()
                    .setName("payment-intent-create.card")
                    .isObject({
                        number: FenextjsValidator().isString().isRequired(),
                        name: FenextjsValidator().isString().isRequired(),
                        expiry_month: FenextjsValidator()
                            .isNumber()
                            .isRequired()
                            .isMinOrEqual(1)
                            .isMaxOrEqual(12),
                        expiry_year: FenextjsValidator()
                            .isNumber()
                            .isRequired()
                            .isMinOrEqual(new Date().getFullYear() % 100)
                            .isMaxOrEqual(99),
                        cvd: FenextjsValidator().isString().isRequired(),
                    })
                    .isRequired(),
            }),
        });

export const onPaymentIntentCreateValidatorProps = (
    data: onPaymentIntentCreateProps,
) => {
    return onPaymentIntentCreateValidator.onValidate(data);
};
