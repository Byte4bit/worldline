import { WorldLineUrl } from "../Url";
export interface WorldLineConfigProps {
    mode: "sandbox" | "production";
    apiKeyId: string;
    secretApiKey: string;
    integrator: string;
    merchantId: string;
}
export class WorldLineConfig extends WorldLineUrl {
    public config: WorldLineConfigProps;

    constructor(config: WorldLineConfigProps) {
        super(config);
        this.config = config;
    }
}
