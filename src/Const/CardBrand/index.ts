export const CardBrandConst = [
    "amex",
    "diners",
    "discover",
    "jcb",
    "maestro",
    "mastercard",
    "solo",
    "visa",
    "visa_debit",
    "visa_electron",
    "unknown",
] as const;

export const CardBrand = [...CardBrandConst];

export type CardBrandType = (typeof CardBrandConst)[number];
