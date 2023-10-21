
import { ErrorFenextjs } from "fenextjs-error";

export type RequestFuntionResult<R = any> = Promise<
    Partial<R> | ErrorFenextjs
>;

