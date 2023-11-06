import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { WorldlineConfig, WorldlineConfigProps } from "../Config";
import { ErrorFenextjs } from "fenextjs-error";

export type RequestFuntionConfig<D = any> = AxiosRequestConfig<D>;
export type RequestFuntionResult<R = any> = Promise<
    Partial<AxiosResponse<R>> | ErrorFenextjs
>;

export type RequestFuntion<D = any, R = any> = (
    config: RequestFuntionConfig<D>,
) => RequestFuntionResult<R>;

export const Request = async <D = any, R = any>(
    config: RequestFuntionConfig<D>,
): RequestFuntionResult<R> => {
    try {
        const response = await axios({
            ...config,
        });

        return response;
    } catch (error: any) {
        return new ErrorFenextjs({
            data: error?.response?.data ?? error,
            message: `${
                error?.response?.data?.message ??
                error?.response?.message ??
                error?.message ??
                error
            }`,
        });
    }
};

export interface WorldlineRequestOnRequestOptions {}
export class WorldlineRequest extends WorldlineConfig {
    protected token: string | undefined = undefined;

    constructor(config: WorldlineConfigProps) {
        super(config);
    }

    public onRequest = async <D = any, R = any>(
        config: RequestFuntionConfig<D>,
    ): RequestFuntionResult<R> => {
        return await Request<D, R>({
            ...config,
            url: `${this.url}${config.url}`,
            headers: {
                ...config.headers,
                ["worldline-account"]: this.config.merchant_account_id,
                ...(this.token
                    ? {
                          ["Authorization"]: `Bearer ${this.token}`,
                      }
                    : {}),
            },
        });
    };
}
