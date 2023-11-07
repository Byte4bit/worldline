export interface WorldlineUrlConfig {
    mode: "sandbox" | "production";
}

export class WorldlineUrl {
    private url_sandbox = "https://api.na.bambora.com/v1";
    private url_production = "https://api.na.bambora.com/v1";
    protected url = "";

    constructor(config: WorldlineUrlConfig) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
