import { WorldlinePaymentCreateMethod } from "./CreateMethods";
import { WorldlinePaymentCreateIntent } from "./CreateIntent";
import { WorldlinePaymentAttachCustomer } from "./AttachCustomer";
export interface WorldlinePaymentProps {
    onCreateMethod: WorldlinePaymentCreateMethod;
    onCreateIntent: WorldlinePaymentCreateIntent;
    onAttachCustomer: WorldlinePaymentAttachCustomer;
}
