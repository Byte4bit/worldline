
import { SdkResponse, SdkResponseError } from "connect-sdk-nodejs/lib/model";
import { ErrorFenextjs } from "fenextjs-error";

export type RequestFuntionResult = Promise<
    Partial<SdkResponse> | ErrorFenextjs
>;


export type RequestResult = {
    error: SdkResponseError | null;
    response: SdkResponse | null;
}

