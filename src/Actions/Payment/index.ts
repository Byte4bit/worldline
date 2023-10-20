import { WorldLineBase } from "../../Base";
import { WorldLinePaymentProps } from "./Interface";
import { Validators } from "./Validator";

export class WorldLinePayment {
    private tilled: WorldLineBase;
    constructor(tilled: WorldLineBase) {
        this.tilled = tilled;
    }

    public onCreatePaymentMethod: WorldLinePaymentProps["onCreateMethod"]["function"] =
        async (data: WorldLinePaymentProps["onCreateMethod"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateMethod.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/payment-methods";
            return await this.tilled.onRequest<
                WorldLinePaymentProps["onCreateMethod"]["props"],
                WorldLinePaymentProps["onCreateMethod"]["result"]
            >(
                {
                    url,
                    data,
                    method: "post",
                },
                {
                    validateToken: true,
                },
            );
        };

    public onCreatePaymentIntent: WorldLinePaymentProps["onCreateIntent"]["function"] =
        async (data: WorldLinePaymentProps["onCreateIntent"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateIntent.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/payment-intents";
            return await this.tilled.onRequest<
                WorldLinePaymentProps["onCreateIntent"]["props"],
                WorldLinePaymentProps["onCreateIntent"]["result"]
            >(
                {
                    url,
                    data,
                    method: "post",
                },
                {
                    validateToken: true,
                },
            );
        };

    public onAttachCustomerPaymentMethod: WorldLinePaymentProps["onAttachCustomer"]["function"] =
        async (data: WorldLinePaymentProps["onAttachCustomer"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentAttachCustomer.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = `/v1/payment-methods/${data.id}/attach`;
            return await this.tilled.onRequest<
                WorldLinePaymentProps["onAttachCustomer"]["props"],
                WorldLinePaymentProps["onAttachCustomer"]["result"]
            >(
                {
                    url,
                    data,
                    method: "put",
                },
                {
                    validateToken: true,
                },
            );
        };
}
