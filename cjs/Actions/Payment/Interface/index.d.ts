import { WorldlinePaymentCreateMethod } from "./CreateMethod";
import { WorldlinePaymentCreateIntent } from "./CreateIntent";
export interface WorldlinePaymentProps {
    onCreateMethod: WorldlinePaymentCreateMethod;
    onCreateIntent: WorldlinePaymentCreateIntent;
}
