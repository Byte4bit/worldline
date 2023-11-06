export declare const CardBrandConst: readonly ["amex", "diners", "discover", "jcb", "maestro", "mastercard", "solo", "visa", "visa_debit", "visa_electron", "unknown"];
export declare const CardBrand: ("unknown" | "amex" | "diners" | "discover" | "jcb" | "maestro" | "mastercard" | "solo" | "visa" | "visa_debit" | "visa_electron")[];
export type CardBrandType = (typeof CardBrandConst)[number];
