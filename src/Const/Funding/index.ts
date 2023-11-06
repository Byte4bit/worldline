export const FundingConst = ["credit", "debit", "prepaid", "unknown"] as const;

export const Funding = [...FundingConst];

export type FundingType = (typeof FundingConst)[number];
