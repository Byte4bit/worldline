import { AxiosRequestConfig, AxiosResponse } from "axios";
import { WorldlineConfig, WorldlineConfigProps } from "../Config";
import { ErrorFenextjs } from "fenextjs-error";
export type RequestFuntionConfig<D = any> = AxiosRequestConfig<D>;
export type RequestFuntionResult<R = any> = Promise<Partial<AxiosResponse<R>> | ErrorFenextjs>;
export type RequestFuntion<D = any, R = any> = (config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
export declare const Request: <D = any, R = any>(config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
export interface WorldlineRequestOnRequestOptions {
}
export declare class WorldlineRequest extends WorldlineConfig {
    protected token: string | undefined;
    constructor(config: WorldlineConfigProps);
    onRequest: <D = any, R = any>(config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
}
