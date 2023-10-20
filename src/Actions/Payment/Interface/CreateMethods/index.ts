import { RequestFuntionResult } from "../../../../Request";
import { onCreateProps } from "./props";
import { onCreateResult } from "./result";
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";

export interface WorldLinePaymentCreateMethod {
    props: onCreateProps;
    result: onCreateResult;
    function: (
        data: onCreateProps,
    ) => RequestFuntionResult<onCreateResult> | ErrorFenextjs;
}
