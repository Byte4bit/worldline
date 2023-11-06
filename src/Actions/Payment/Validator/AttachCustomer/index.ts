import { onAttachCustomerProps } from "../../Interface/AttachCustomer/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentAttachCustomer =
    FenextjsValidator<onAttachCustomerProps>()
        .setName("attach-customer-payment")
        .isRequired()
        .isObject({
            id: FenextjsValidator().isString().isRequired(),
            customer_id: FenextjsValidator().isString().isRequired(),
        });
