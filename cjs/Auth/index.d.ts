import { WorldlineConfigProps } from "../Config";
import { RequestFuntionConfig, RequestFuntionResult, WorldlineRequest } from "../Request";
export interface WorldlineAuthRequestProps {
    validateToken?: boolean;
}
export declare class WorldlineAuth extends WorldlineRequest {
    constructor(config: WorldlineConfigProps);
    private onLogin;
    private onLoadToken;
    onRequest: <D = any, R = any>(config: RequestFuntionConfig<D>, options?: WorldlineAuthRequestProps) => RequestFuntionResult<R>;
}
