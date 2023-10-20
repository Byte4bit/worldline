import { RequestFuntionResult } from "../../../Request";
import { onLoginProps } from "./props";
import { onLoginResult } from "./result";

export interface WorldLineLogin {
    props: onLoginProps;
    result: onLoginResult;
    function: (data: onLoginProps) => RequestFuntionResult<onLoginResult>;
}
