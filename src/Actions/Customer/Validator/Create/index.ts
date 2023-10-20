import { onCreateProps } from "../../Interface/Create/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorCustomerCreate = FenextjsValidator<onCreateProps>()
    .setName("create-customer")
    .isRequired()
    .isObject({
        email: FenextjsValidator().isString().isRequired(),
        first_name: FenextjsValidator()
            .isString()
            .isRequired()
            .isMaxOrEqual(255),
        last_name: FenextjsValidator()
            .isString()
            .isRequired()
            .isMaxOrEqual(255),
        middle_name: FenextjsValidator()
            .isString()
            .isRequired()
            .isMaxOrEqual(255),
        phone: FenextjsValidator().isString().isRequired(),
    });
