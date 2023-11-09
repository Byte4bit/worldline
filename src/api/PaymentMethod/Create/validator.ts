import { FenextjsValidator } from "fenextjs-validator";
import { onPaymentMethodCreateProps } from "./interface";

export const onPaymentMethodCreateValidator =
    FenextjsValidator<onPaymentMethodCreateProps>()
        .setName("payment-method-create")
        .isObject({
            token: FenextjsValidator().isString().isRequired(),
            customer_code: FenextjsValidator().isString().isRequired(),
            card: FenextjsValidator()
                .isObject({
                    name: FenextjsValidator().isString().isRequired(),
                    number: FenextjsValidator().isString().isRequired(),
                    expiry_month: FenextjsValidator().isString().isRequired(),
                    expiry_year: FenextjsValidator().isString().isRequired(),
                    cvd: FenextjsValidator().isString().isRequired(),
                })
                .isRequired(),
            billing: FenextjsValidator()
                .isObject({
                    name: FenextjsValidator().isString().isRequired(),
                    address_line1: FenextjsValidator().isString().isRequired(),
                    // address_line2: FenextjsValidator().isString().isRequired(),
                    city: FenextjsValidator().isString().isRequired(),
                    email_address: FenextjsValidator().isString().isRequired(),
                    province: FenextjsValidator().isString().isRequired(),
                    country: FenextjsValidator().isString().isRequired(),
                    postal_code: FenextjsValidator().isString().isRequired(),
                })
                .isRequired(),
        });

export const onPaymentMethodCreateValidatorProps = (
    data: onPaymentMethodCreateProps,
) => {
    return onPaymentMethodCreateValidator.onValidate(data);
};
