import { WorldLinePaymentCreateMethod } from "./CreateMethods";
import { WorldLinePaymentCreateIntent } from "./CreateIntent";
import { WorldLinePaymentAttachCustomer } from "./AttachCustomer";
export interface WorldLinePaymentProps {
    onCreateMethod: WorldLinePaymentCreateMethod;
    onCreateIntent: WorldLinePaymentCreateIntent;
    onAttachCustomer: WorldLinePaymentAttachCustomer;
}
