import { onCreateProps } from "../../Interface/CreateIntent/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateIntent = FenextjsValidator<onCreateProps>()
    .setName("create-payment-intent")
    .isObject({});
