export declare const PaymentMethodConst: readonly ["card", "ach_debit", "eft_debit"];
export declare const PaymentMethod: ("card" | "ach_debit" | "eft_debit")[];
export type PaymentMethodType = (typeof PaymentMethodConst)[number];
