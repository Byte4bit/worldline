import { onCreateProps } from "../../Interface/CreateIntent/props";
import { CurrencyConst } from "../../../../Const/Currency";
import { PaymentMethodConst } from "../../../../Const/PaymentMethod";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateIntent = FenextjsValidator<onCreateProps>()
    .setName("create-payment-intent")
    .isObject({
        amount: FenextjsValidator()
            .isNumber()
            .isRequired()
            .isMinOrEqual(1)
            .isMaxOrEqual(99999999),
        currency: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(CurrencyConst),
        payment_method_types: FenextjsValidator()
            .isArray(
                FenextjsValidator()
                    .isRequired()
                    .isString()
                    .isEqual(PaymentMethodConst),
            )
            .isMaxOrEqual(1)
            .isRequired(),
        payment_method_id: FenextjsValidator().isString().isRequired(),
    });
