import { WorldLineAuthProps } from "./Interface";
import { WorldLineConfigProps } from "../Config";
import {
    Request,
    RequestFuntionConfig,
    RequestFuntionResult,
    WorldLineRequest,
} from "../Request";

export interface WorldLineAuthRequestProps {
    validateToken?: boolean;
}

export class WorldLineAuth extends WorldLineRequest {
    constructor(config: WorldLineConfigProps) {
        super(config);
    }
    private onLogin: WorldLineAuthProps["onLogin"]["function"] = async (
        data: WorldLineAuthProps["onLogin"]["props"],
    ) => {
        const url = "/v1/auth/login";
        const result = await this.onRequest<
            WorldLineAuthProps["onLogin"]["props"],
            WorldLineAuthProps["onLogin"]["result"]
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
        options?: WorldLineAuthRequestProps,
    ): RequestFuntionResult<R> => {
        if (options?.validateToken) {
            await this?.onLoadToken();
        }
        return await Request<D, R>({
            ...config,
            url: `${this.url}${config.url}`,
            headers: {
                ...config.headers,
                ["tilled-account"]: this.config.merchant_account_id,
                ...(this.token
                    ? {
                          ["Authorization"]: `Bearer ${this.token}`,
                      }
                    : {}),
            },
        });
    };
}
