import { AxiosRequestConfig } from "axios";
import { ErrorFenextjs } from "fenextjs-error";
export declare const onRequest: <T = any, D = any>(config: AxiosRequestConfig<D>) => Promise<T | ErrorFenextjs<any>>;
