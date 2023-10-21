import { WorldLineUrl } from "../Url";
export interface WorldLineConfigProps {
    mode: "sandbox" | "production";
    apiKeyId: string;
    secretApiKey: string;
    integrator: string;
}
export declare class WorldLineConfig extends WorldLineUrl {
    protected config: WorldLineConfigProps;
    constructor(config: WorldLineConfigProps);
}
