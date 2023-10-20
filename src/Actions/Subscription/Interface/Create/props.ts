import { CurrencyType } from "../../../../Const/Currency";
import { IntervalUnitType } from "../../../../Const/IntervalUnit";

export interface Metadata {
    [id: string]: any;
}

export interface onCreateProps {
    billing_cycle_anchor: string;
    currency: CurrencyType;
    customer_id: string;
    interval_unit: IntervalUnitType;
    payment_method_id: string;
    price: number;
    cancel_at?: string;
    interval_count?: number;
    metadata?: Metadata;
    platform_fee_amount?: number;
}
