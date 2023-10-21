import { SdkResponse, SdkResponseError } from "connect-sdk-nodejs/lib/model";
import { WorldLineBase } from "../../Base";
import { WorldLinePaymentProps } from "./Interface";
import { Validators } from "./Validator";
import { ErrorFenextjs } from "fenextjs-error";

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
                
            const result = await  new Promise<
            {
                error:SdkResponseError | null,
                response:SdkResponse| null
            }
            >((resolve) => {
                this.worldline.sdk.payments.create(
                    this.worldline.config.merchantId,
                    data,
                    null,
                    (error, response) => {
                        resolve({
                            error,
                            response
                        });
                    },
                );
            });
            if(result.error){
                throw result.error
            }
            return result.response
            } catch (error) {
                return new ErrorFenextjs({})
            }
        };
}
