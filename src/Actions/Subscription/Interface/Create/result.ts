import { CurrencyType } from "../../../../Const/Currency";
import { IntervalUnitType } from "../../../../Const/IntervalUnit";
import { StatusType } from "../../../../Const/Status";

interface Metadata {
    [id: string]: any;
}

export interface onCreateResult {
    account_id: string;
    billing_cycle_anchor: string;
    cancel_at?: string;
    canceled_at?: string;
    created_at: string;
    currency: CurrencyType;
    customer_id: string;
    id: string;
    interval_count: number;
    interval_unit: IntervalUnitType;
    metadata?: Metadata;
    next_payment_at?: string;
    pause_at?: string;
    paused_at?: string;
    payment_method_id: string;
    platform_fee_amount?: number;
    price: number;
    resume_at?: string;
    status: StatusType;
    updated_at: string;
}
