export declare const AchDebitConst: readonly ["checking", "savings"];
export declare const AchDebit: ("checking" | "savings")[];
export type AchDebitType = (typeof AchDebitConst)[number];
