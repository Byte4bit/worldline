import { WorldlineUrl } from "../Url";
export interface WorldlineConfigProps {
    mode: "sandbox" | "production";
    merchant_account_id: string;
    passcode: string;
}
export declare class WorldlineConfig extends WorldlineUrl {
    protected config: WorldlineConfigProps;
    constructor(config: WorldlineConfigProps);
}
