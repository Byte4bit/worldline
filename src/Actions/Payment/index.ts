import { WorldlineBase } from "../../Base";
import { WorldlinePaymentProps } from "./Interface";
import { Validators } from "./Validator";

export class WorldlinePayment {
    private worldline: WorldlineBase;
    constructor(worldline: WorldlineBase) {
        this.worldline = worldline;
    }

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
}
