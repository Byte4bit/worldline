import { WorldLineUrl } from "../Url";
export interface WorldLineConfigProps {
    mode: "sandbox" | "production";
    apiKeyId: string;
    secretApiKey: string;
    integrator: string;
}
export class WorldLineConfig extends WorldLineUrl {
    protected config: WorldLineConfigProps;

    constructor(config: WorldLineConfigProps) {
        super(config);
        this.config = config;
    }
}
