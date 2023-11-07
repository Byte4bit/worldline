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
    private onLoadToken = async () => {
        this.token = btoa(
            this.config.merchant_account_id + ":" + this.config.passcode,
        );
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
                          ["Authorization"]: `Passcode ${this.token}`,
                      }
                    : {}),
            },
        });
    };
}
