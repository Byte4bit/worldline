import { WorldlineAuth } from "../Auth";
import { WorldlineConfigProps } from "../Config";

export class WorldlineBase extends WorldlineAuth {
    constructor(config: WorldlineConfigProps) {
        super(config);
    }
}
