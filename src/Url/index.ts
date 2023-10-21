export interface WorldLineUrlConfig {
    mode: "sandbox" | "production";
}

export class WorldLineUrl {
    private url_sandbox = "https://world.preprod.api-ingenico.com";
    private url_production = "https://world.api-ingenico.com";
    protected url = "";

    constructor(config: WorldLineUrlConfig) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
