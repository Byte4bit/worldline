import { WorldlineAuthProps } from "./Interface";
import { WorldlineConfigProps } from "../Config";
import {
    Request,
    RequestFuntionConfig,
    RequestFuntionResult,
    WorldlineRequest,
} from "../Request";

export interface WorldlineAuthRequestProps {
    validateToken?: boolean;
}

export class WorldlineAuth extends WorldlineRequest {
    constructor(config: WorldlineConfigProps) {
        super(config);
    }
    private onLogin: WorldlineAuthProps["onLogin"]["function"] = async (
        data: WorldlineAuthProps["onLogin"]["props"],
    ) => {
        const url = "/v1/auth/login";
        const result = await this.onRequest<
            WorldlineAuthProps["onLogin"]["props"],
            WorldlineAuthProps["onLogin"]["result"]
        >({
            url,
            method: "post",
            data: {
                email: data.email,
                password: data.password,
            },
        });
        return result;
    };
    private onLoadToken = async () => {
        const result = await this.onLogin(this.config);
        this.token = result?.data?.token;
    };
    public onRequest = async <D = any, R = any>(
        config: RequestFuntionConfig<D>,
        options?: WorldlineAuthRequestProps,
    ): RequestFuntionResult<R> => {
        if (options?.validateToken) {
            await this?.onLoadToken();
        }
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
