import { WorldLineBase } from "../../Base";
import { WorldLineCustomerProps } from "./Interface";
import { Validators } from "./Validator";

export class WorldLineCustomer {
    private tilled: WorldLineBase;
    constructor(tilled: WorldLineBase) {
        this.tilled = tilled;
    }

    public onCreateCustomer: WorldLineCustomerProps["onCreate"]["function"] =
        async (data: WorldLineCustomerProps["onCreate"]["props"]) => {
            const valid = Validators.ValidatorCustomerCreate.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/customers";
            return await this.tilled.onRequest<
                WorldLineCustomerProps["onCreate"]["props"],
                WorldLineCustomerProps["onCreate"]["result"]
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
