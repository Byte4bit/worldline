import { onRequest } from "../../Request";
import { URL } from "../../../url";
import { onPaymentIntentCreateFunction } from "./interface";
import { onPaymentIntentCreateValidatorProps } from "./validator";
import { onPaymentIntentCreateParseProps } from "./parse";

export const onPaymentIntentCreate: onPaymentIntentCreateFunction = async (
    data,
) => {
    const validate = onPaymentIntentCreateValidatorProps(data);
    if (validate !== true) {
        return validate;
    }
    const result = await onRequest({
        url: URL + `/payments`,
        method: "post",
        headers: {
            Authorization: `Passcode ${data.token}`,
        },
        data: {
            ...onPaymentIntentCreateParseProps(data),
        },
    });
    return result;
};
