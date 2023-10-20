import { WorldLineUrl } from "../Url";
export interface WorldLineConfigProps {
    mode: "sandbox" | "production";
    merchant_account_id: string;
    email: string;
    password: string;
}
export class WorldLineConfig extends WorldLineUrl {
    protected config: WorldLineConfigProps;

    constructor(config: WorldLineConfigProps) {
        super(config);
        this.config = config;
    }
}
