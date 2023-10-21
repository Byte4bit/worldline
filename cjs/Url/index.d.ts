export interface WorldLineUrlConfig {
    mode: "sandbox" | "production";
}
export declare class WorldLineUrl {
    private url_sandbox;
    private url_production;
    protected url: string;
    constructor(config: WorldLineUrlConfig);
}
