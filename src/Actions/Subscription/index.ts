import { WorldLineBase } from "../../Base";
import { WorldLineSubscriptionProps } from "./Interface";
import { Validators } from "./Validator";

export class WorldLineSubscription {
    private tilled: WorldLineBase;
    constructor(tilled: WorldLineBase) {
        this.tilled = tilled;
    }

    public onCreateSubscription: WorldLineSubscriptionProps["onCreate"]["function"] =
        async (data: WorldLineSubscriptionProps["onCreate"]["props"]) => {
            const valid =
                Validators.ValidatorSubscriptionCreate.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/subscriptions";
            return await this.tilled.onRequest<
                WorldLineSubscriptionProps["onCreate"]["props"],
                WorldLineSubscriptionProps["onCreate"]["result"]
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

    public onCancelSubscription: WorldLineSubscriptionProps["onCancel"]["function"] =
        async (data: WorldLineSubscriptionProps["onCancel"]["props"]) => {
            const valid =
                Validators.ValidatorSubscriptionCancel.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = `/v1/subscriptions/${data.id}/cancel`;
            return await this.tilled.onRequest<
                WorldLineSubscriptionProps["onCancel"]["props"],
                WorldLineSubscriptionProps["onCancel"]["result"]
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
