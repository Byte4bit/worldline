import { RequestFuntionResult } from "../../../../Request";
import { SdkResponse } from "connect-sdk-nodejs/lib/model";
import { CreatePaymentRequest } from "connect-sdk-nodejs/lib/model/domain/payment";

export interface WorldLinePaymentCreateIntent {
    props: CreatePaymentRequest;
    result: SdkResponse;
    function: (data: CreatePaymentRequest) => RequestFuntionResult;
}
