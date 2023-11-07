export interface onCreateResult {
    id: string;
    authorizing_merchant_id: number;
    approved: number;
    message_id: number;
    message: string;
    auth_code: string;
    created: string;
    order_number: string;
    type: string;
    risk_score: number;
    amount: number;
    payment_method: string;
}
