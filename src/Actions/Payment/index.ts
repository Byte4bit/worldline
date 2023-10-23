import { SdkResponseError } from "connect-sdk-nodejs/lib/model";
import { WorldLineBase } from "../../Base";
import { WorldLinePaymentProps } from "./Interface";
import { Validators } from "./Validator";
import { ErrorFenextjs } from "fenextjs-error";
import { ErrorCode } from "fenextjs-interface/cjs/Error";
import { RequestResult } from "../../Request";

export class WorldLinePayment {
    private worldline: WorldLineBase;
    constructor(worldline: WorldLineBase) {
        this.worldline = worldline;
    }

    public onCreatePaymentIntent: WorldLinePaymentProps["onCreateIntent"]["function"] =
        async (data: WorldLinePaymentProps["onCreateIntent"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateIntent.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            try {
                const result = await new Promise<RequestResult>((resolve) => {
                    this.worldline.sdk.payments.create(
                        this.worldline.config.merchantId,
                        data,
                        null,
                        (error, response) => {
                            resolve({
                                error,
                                response,
                            });
                        },
                    );
                });
                if (result.error) {
                    throw result.error;
                }
                if (!result.response) {
                    return new ErrorFenextjs({
                        code: ErrorCode.ERROR,
                        message: "Response Null",
                    });
                }
                return result.response;
            } catch (e) {
                const error = e as SdkResponseError;
                return new ErrorFenextjs({
                    message: error.message,
                    data: error,
                });
            }
        };
}
