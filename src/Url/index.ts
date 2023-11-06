export interface WorldlineUrlConfig {
    mode: "sandbox" | "production";
}

export class WorldlineUrl {
    private url_sandbox = "https://sandbox-api.worldline.com";
    private url_production = "https://api.worldline.com";
    protected url = "";

    constructor(config: WorldlineUrlConfig) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
