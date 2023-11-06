import {
    onCreateProps,
    Card,
    AchDebit,
    EftDebit,
    BillingDetails,
} from "../../Interface/CreateMethods/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateMethod_ach_debit =
    FenextjsValidator<AchDebit>()
        .setName("ach_debit")
        .isRequired()
        .isObject({
            account_holder_name: FenextjsValidator()
                .isString()
                .isRequired()
                .isMaxOrEqual(22),
            account_number: FenextjsValidator()
                .isString()
                .isRequired()
                .isMinOrEqual(4)
                .isMaxOrEqual(17),

            account_type: FenextjsValidator()
                .isString()
                .isRequired()
                .isEqual(["checking", "savings"]),
            routing_number: FenextjsValidator().isString().isRequired(),
        });

export const ValidatorPaymentCreateMethod_billing_details =
    FenextjsValidator<BillingDetails>()
        .setName("billing_details")
        .isRequired()
        .isObject({
            address: FenextjsValidator<BillingDetails["address"]>()
                .setName("address")
                .isRequired()
                .isObject({
                    city: FenextjsValidator()
                        .isString()
                        .isRequired()
                        .isMaxOrEqual(40),
                    country: FenextjsValidator()
                        .isString()
                        .isRequired()
                        .isLength(2),
                    state: FenextjsValidator()
                        .isString()
                        .isRequired()
                        .isLength(2),
                    street: FenextjsValidator()
                        .isString()
                        .isRequired()
                        .isMaxOrEqual(50),
                    street2: FenextjsValidator()
                        .isString()
                        .isRequired()
                        .isMaxOrEqual(50),
                    zip: FenextjsValidator()
                        .isString()
                        .isRequired()
                        .isMaxOrEqual(10),
                }),
            email: FenextjsValidator().isString().isRequired(),
            name: FenextjsValidator().isString().isRequired(),
            phone: FenextjsValidator().isString().isRequired(),
        });

export const ValidatorPaymentCreateMethod_card = FenextjsValidator<Card>()
    .setName("card")
    .isRequired()
    .isObject({
        exp_month: FenextjsValidator()
            .isNumber()
            .isRequired()
            .isMinOrEqual(1)
            .isMaxOrEqual(12),
        exp_year: FenextjsValidator()
            .isNumber()
            .isRequired()
            .isMinOrEqual(new Date().getFullYear())
            .isMaxOrEqual(9999),
        number: FenextjsValidator().isString().isRequired(),
        // cvc?:  FenextjsValidator().isString();
    });

export const ValidatorPaymentCreateMethod_eft_debit =
    FenextjsValidator<EftDebit>()
        .setName("eft_debit")
        .isRequired()
        .isObject({
            account_holder_name: FenextjsValidator()
                .isString()
                .isRequired()
                .isMaxOrEqual(22),
            account_number: FenextjsValidator()
                .isString()
                .isRequired()
                .isMinOrEqual(4)
                .isMaxOrEqual(12),

            institution_id: FenextjsValidator()
                .isString()
                .isRequired()
                .isLength(3),
            transit_number: FenextjsValidator()
                .isString()
                .isRequired()
                .isLength(5),
        });

export const ValidatorPaymentCreateMethod = FenextjsValidator<onCreateProps>()
    .setName("create-payment-method")
    .isRequired()
    .isObject({
        type: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(["card", "ach_debit", "eft_debit"]),
        ach_debit: FenextjsValidator().isWhen({
            key: "type",
            is: FenextjsValidator().isEqual("ach_debit"),
            then: ValidatorPaymentCreateMethod_ach_debit,
        }),
        card: FenextjsValidator().isWhen({
            key: "type",
            is: FenextjsValidator().isEqual("card"),
            then: ValidatorPaymentCreateMethod_card,
        }),
        eft_debit: FenextjsValidator().isWhen({
            key: "type",
            is: FenextjsValidator().isEqual("eft_debit"),
            then: ValidatorPaymentCreateMethod_eft_debit,
        }),
        billing_details: ValidatorPaymentCreateMethod_billing_details,
    });
