import { WorldlineBase } from "../../Base";
import { WorldlinePaymentProps } from "./Interface";
import { Validators } from "./Validator";

export class WorldlinePayment {
    private worldline: WorldlineBase;
    constructor(worldline: WorldlineBase) {
        this.worldline = worldline;
    }

    public onCreatePaymentMethod: WorldlinePaymentProps["onCreateMethod"]["function"] =
        async (data: WorldlinePaymentProps["onCreateMethod"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateMethod.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/payment-methods";
            return await this.worldline.onRequest<
                WorldlinePaymentProps["onCreateMethod"]["props"],
                WorldlinePaymentProps["onCreateMethod"]["result"]
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

    public onCreatePaymentIntent: WorldlinePaymentProps["onCreateIntent"]["function"] =
        async (data: WorldlinePaymentProps["onCreateIntent"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateIntent.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/payment-intents";
            return await this.worldline.onRequest<
                WorldlinePaymentProps["onCreateIntent"]["props"],
                WorldlinePaymentProps["onCreateIntent"]["result"]
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

    public onAttachCustomerPaymentMethod: WorldlinePaymentProps["onAttachCustomer"]["function"] =
        async (data: WorldlinePaymentProps["onAttachCustomer"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentAttachCustomer.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = `/v1/payment-methods/${data.id}/attach`;
            return await this.worldline.onRequest<
                WorldlinePaymentProps["onAttachCustomer"]["props"],
                WorldlinePaymentProps["onAttachCustomer"]["result"]
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
