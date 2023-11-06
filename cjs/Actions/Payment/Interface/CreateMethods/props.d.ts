import { AchDebitType } from "../../../../Const/AchDebit";
import { PaymentMethodType } from "../../../../Const/PaymentMethod";
export interface AchDebit {
    account_holder_name: string;
    account_number: string;
    account_type: AchDebitType;
    routing_number: string;
}
export interface BillingDetails {
    address: Address;
    email: string;
    name: string;
    phone: string;
}
export interface Address {
    city: string;
    country: string;
    state: string;
    street: string;
    street2: string;
    zip: string;
}
export interface Card {
    cvc?: string;
    exp_month: number;
    exp_year: number;
    number: string;
}
export interface EftDebit {
    account_holder_name: string;
    account_number: string;
    institution_id: string;
    transit_number: string;
}
export interface Metadata {
    [id: string]: any;
}
export interface onCreateProps {
    ach_debit?: AchDebit;
    billing_details?: BillingDetails;
    card?: Card;
    eft_debit?: EftDebit;
    metadata?: Metadata;
    nick_name?: string;
    payment_token?: string;
    type: PaymentMethodType;
}
