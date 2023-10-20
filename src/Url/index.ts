export interface WorldLineUrlConfig {
    mode: "sandbox" | "production";
}

export class WorldLineUrl {
    private url_sandbox = "https://sandbox-api.tilled.com";
    private url_production = "https://api.tilled.com";
    protected url = "";

    constructor(config: WorldLineUrlConfig) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
