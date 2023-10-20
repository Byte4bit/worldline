export const AchDebitConst = ["checking", "savings"] as const;

export const AchDebit = [...AchDebitConst];

export type AchDebitType = (typeof AchDebitConst)[number];
