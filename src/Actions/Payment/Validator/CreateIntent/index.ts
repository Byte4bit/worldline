import { WorldLinePaymentCreateIntent } from "../../Interface/CreateIntent";

import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateIntent = FenextjsValidator<WorldLinePaymentCreateIntent["props"]>()
    .setName("create-payment-intent")
    .isObject({
        
    });
