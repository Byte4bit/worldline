import { RequestFuntionResult } from "../../../../Request";
import { onAttachCustomerProps } from "./props";
import { onAttachCustomerResult } from "./result";
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
export interface WorldlinePaymentAttachCustomer {
    props: onAttachCustomerProps;
    result: onAttachCustomerResult;
    function: (data: onAttachCustomerProps) => RequestFuntionResult<onAttachCustomerResult> | ErrorFenextjs;
}
