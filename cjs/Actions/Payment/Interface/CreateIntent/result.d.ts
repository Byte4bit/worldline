import { FundingType } from "../../../../Const/Funding";
import { CurrencyType } from "../../../../Const/Currency";
import { OccurrenceType } from "../../../../Const/Occurrence";
import { PaymentMethodType } from "../../../../Const/PaymentMethod";
import { CardBrandType } from "../../../../Const/CardBrand";
type Charge_status = "succeeded" | "pending" | "failed";
type Charge_Failure_code = "account_closed" | "account_frozen" | "account_number_invalid" | "authorization_revoked" | "avs_check_failed" | "bank_account_blocked" | "call_issuer" | "card_not_supported" | "expired_card" | "fraudulent" | "generic_decline" | "incorrect_cvc" | "insufficient_funds" | "invalid_expiry" | "invalid_field" | "invalid_number" | "limit_exceeded" | "no_account" | "not_authorized" | "not_permitted" | "processing_error" | "not_recognized" | "pickup_card" | "restricted_card" | "risk_blocked" | "service_not_allowed" | "stop_payment" | "try_again_later" | "internal_error";
type Refund2_Status = "canceled" | "pending" | "succeeded" | "failed";
type Failure_code = "expired_or_canceled_card" | "lost_or_stolen_card" | "fraudulent" | "risk_blocked" | "declined" | "proprietary_card_activity_regulations" | "blacklisted_card" | "not_permitted" | "processing_error";
type Reason = "duplicate" | "fraudulent" | "requested_by_customer" | "expired_uncaptured_charge" | "partial_capture";
type CreateResult_status = "canceled" | "processing" | "requires_action" | "requires_capture" | "requires_confirmation" | "requires_payment_method" | "succeeded";
type CreateResult_cancellation_reason = "duplicate" | "fraudulent" | "requested_by_customer" | "abandoned" | "automatic";
type LastPaymentError_code = "account_closed" | "account_frozen" | "account_number_invalid" | "authorization_revoked" | "avs_check_failed" | "bank_account_blocked" | "call_issuer" | "card_not_supported" | "expired_card" | "fraudulent" | "generic_decline" | "incorrect_cvc" | "insufficient_funds" | "invalid_expiry" | "invalid_field" | "invalid_number" | "limit_exceeded" | "no_account" | "not_authorized" | "not_permitted" | "processing_error" | "not_recognized" | "pickup_card" | "restricted_card" | "risk_blocked" | "service_not_allowed" | "stop_payment" | "try_again_later" | "internal_error";
type Account_type = "checking" | "savings" | "unknown";
type Checks_status = "pass" | "fail" | "unavailable" | "unchecked";
type Capture_method = "automatic" | "manual";
interface Charge {
    amount_captured: number;
    amount_refunded: number;
    captured: boolean;
    captured_at: string;
    id: string;
    payment_intent_id: string;
    payment_method_id: string;
    refunded: boolean;
    refunds: Refund2[];
    status: Charge_status;
    updated_at: string;
    created_at?: string;
    failed_at?: string;
    failure_code?: Charge_Failure_code;
    failure_message?: string;
    platform_fee?: PlatformFee;
}
interface PlatformFee {
    amount: number;
    amount_refunded: number;
    charge_id: string;
    created_at: string;
    currency: CurrencyType;
    id: string;
    payee_account_id: string;
    payer_account_id: string;
    refunded: boolean;
    refunds: Refund[];
    updated_at: string;
}
interface Refund {
    amount: number;
    created_at: string;
    id: string;
    platform_fee_id: string;
    updated_at: string;
}
interface Refund2 {
    amount: number;
    charge_id: string;
    created_at: string;
    id: string;
    payment_intent_id: string;
    status: Refund2_Status;
    updated_at: string;
    failure_code?: Failure_code;
    failure_message?: string;
    metadata?: Metadata;
    payment_method_id?: string;
    reason?: Reason;
}
interface Metadata {
    [id: string]: any;
}
interface Customer {
    account_id: string;
    created_at: string;
    id: string;
    updated_at: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    metadata?: Metadata;
    middle_name?: string;
    phone?: string;
}
interface LastPaymentError {
    charge_id: string;
    message: string;
    code?: LastPaymentError_code;
}
interface Level3 {
    duty_amount: number;
    line_items: LineItem[];
    shipping_address_country: string;
    shipping_address_zip: string;
    shipping_amount: number;
    shipping_from_zip: string;
}
interface LineItem {
    product_code: string;
    product_description: string;
    quantity: number;
    tax_amount: number;
    unit_amount: number;
}
interface PaymentMethod {
    chargeable: boolean;
    created_at: string;
    id: string;
    type: PaymentMethodType;
    updated_at: string;
    ach_debit?: AchDebit;
    billing_details?: BillingDetails;
    card?: Card;
    customer_id?: string;
    eft_debit?: EftDebit;
    expires_at?: string;
    metadata?: Metadata;
    nick_name?: string;
}
interface AchDebit {
    account_type: Account_type;
    bank_name: string;
    last2: string;
    routing_number: string;
}
interface BillingDetails {
    address?: Address;
    email?: string;
    name?: string;
    phone?: string;
}
interface Address {
    city?: string;
    country?: string;
    state?: string;
    street?: string;
    street2?: string;
    zip?: string;
}
interface Card {
    apple_pay?: boolean;
    brand?: CardBrandType;
    checks?: Checks;
    exp_month?: number;
    exp_year?: number;
    funding?: FundingType;
    holder_name?: string;
    last4?: string;
}
interface Checks {
    address_line1_check?: Checks_status;
    address_postal_code_check?: Checks_status;
    cvc_check?: Checks_status;
}
interface EftDebit {
    bank_name?: string;
    institution_id?: string;
    last2?: string;
    transit_number?: string;
}
export interface onCreateResult {
    account_id: string;
    amount: number;
    amount_capturable: number;
    amount_received: number;
    capture_method: Capture_method;
    charges: Charge[];
    client_secret: string;
    created_at: string;
    currency: CurrencyType;
    id: string;
    payment_method_types: PaymentMethodType[];
    status: CreateResult_status;
    updated_at: string;
    canceled_at?: string;
    cancellation_reason?: CreateResult_cancellation_reason;
    customer?: Customer;
    last_payment_error?: LastPaymentError;
    level3?: Level3;
    metadata?: Metadata;
    occurrence_type?: OccurrenceType;
    payment_method?: PaymentMethod;
    platform_fee_amount?: number;
    statement_descriptor_suffix?: string;
    subscription_id?: string;
}
export {};
