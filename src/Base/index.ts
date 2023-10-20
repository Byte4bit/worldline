import { WorldLineAuth } from "../Auth";
import { WorldLineConfigProps } from "../Config";

export class WorldLineBase extends WorldLineAuth {
    constructor(config: WorldLineConfigProps) {
        super(config);
    }
}
