import { AchDebitType } from "../../../../Const/AchDebit";
import { PaymentMethodType } from "../../../../Const/PaymentMethod";
import { FundingType } from "../../../../Const/Funding";
import { CardBrandType } from "../../../../Const/CardBrand";
import { ChecksType } from "../../../../Const/Checks";
interface AchDebit {
    account_type: AchDebitType;
    bank_name: string;
    last2: string;
    routing_number: string;
}
interface BillingDetails {
    address: Address;
    email: string;
    name: string;
    phone: string;
}
interface Address {
    city: string;
    country: string;
    state: string;
    street: string;
    street2: string;
    zip: string;
}
interface Card {
    apple_pay: boolean;
    brand: CardBrandType;
    checks: Checks;
    exp_month: number;
    exp_year: number;
    funding: FundingType;
    holder_name: string;
    last4: string;
}
interface Checks {
    address_line1_check: ChecksType;
    address_postal_code_check: ChecksType;
    cvc_check: ChecksType;
}
interface EftDebit {
    bank_name: string;
    institution_id: string;
    last2: string;
    transit_number: string;
}
interface Metadata {
    [id: string]: any;
}
export interface onCreateResult {
    id: string;
    chargeable: boolean;
    created_at: string;
    type: PaymentMethodType;
    updated_at: string;
    ach_debit?: AchDebit;
    billing_details?: BillingDetails;
    card?: Card;
    customer_id: string;
    eft_debit: EftDebit;
    expires_at: string;
    metadata: Metadata;
    nick_name: string;
}
export {};
