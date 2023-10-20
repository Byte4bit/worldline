import { onCreateProps } from "../../Interface/Create/props";
import { CurrencyConst } from "../../../../Const/Currency";
import { FenextjsValidator } from "fenextjs-validator";
import { IntervalUnitConst } from "../../../../Const/IntervalUnit";

export const ValidatorSubscriptionCreate = FenextjsValidator<onCreateProps>()
    .setName("create-customer")
    .isRequired()
    .isObject({
        billing_cycle_anchor: FenextjsValidator().isString().isRequired(),
        currency: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(CurrencyConst),
        customer_id: FenextjsValidator().isString().isRequired(),
        interval_unit: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(IntervalUnitConst),
        payment_method_id: FenextjsValidator().isString().isRequired(),
        price: FenextjsValidator()
            .isNumber()
            .isRequired()
            .isMinOrEqual(1)
            .isMaxOrEqual(99999999),
    });
