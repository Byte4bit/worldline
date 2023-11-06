export interface WorldlineUrlConfig {
    mode: "sandbox" | "production";
}
export declare class WorldlineUrl {
    private url_sandbox;
    private url_production;
    protected url: string;
    constructor(config: WorldlineUrlConfig);
}
