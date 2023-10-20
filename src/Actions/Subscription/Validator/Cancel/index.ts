import { onCancelProps } from "../../Interface/Cancel/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorSubscriptionCancel = FenextjsValidator<onCancelProps>()
    .setName("create-customer")
    .isRequired()
    .isObject({
        id: FenextjsValidator().isString().isRequired(),
    });
