import { CurrencyType } from "../../../../Const/Currency";
import { PaymentMethodType } from "../../../../Const/PaymentMethod";
import { CaptureMethodType } from "../../../../Const/CaptureMethod";
import { OccurrenceType } from "../../../../Const/Occurrence";
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
interface Metadata {
    [id: string]: any;
}
export interface onCreateProps {
    amount: number;
    currency: CurrencyType;
    payment_method_types: PaymentMethodType[];
    capture_method?: CaptureMethodType;
    confirm?: boolean;
    level3?: Level3;
    metadata?: Metadata;
    occurrence_type?: OccurrenceType;
    payment_method_id?: string;
    platform_fee_amount?: number;
    statement_descriptor_suffix?: string;
}
export {};
