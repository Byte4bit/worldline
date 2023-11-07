import { onCreateProps } from "../../Interface/CreateMethod/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateMethod = FenextjsValidator<onCreateProps>()
    .setName("create-payment-intent")
    .isObject({});
