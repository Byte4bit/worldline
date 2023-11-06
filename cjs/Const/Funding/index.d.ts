export declare const FundingConst: readonly ["credit", "debit", "prepaid", "unknown"];
export declare const Funding: ("credit" | "debit" | "prepaid" | "unknown")[];
export type FundingType = (typeof FundingConst)[number];
