import { WorldLineSubscriptionCreate } from "./Create";
import { WorldLineSubscriptionCancel } from "./Cancel";
export interface WorldLineSubscriptionProps {
    onCreate: WorldLineSubscriptionCreate;
    onCancel: WorldLineSubscriptionCancel;
}
