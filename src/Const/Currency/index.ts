export const CurrencyConst = [
    "aud",
    "cad",
    "dkk",
    "eur",
    "hkd",
    "jpy",
    "nzd",
    "nok",
    "gbp",
    "zar",
    "sek",
    "chf",
    "usd",
] as const;

export const Currency = [...CurrencyConst];

export type CurrencyType = (typeof CurrencyConst)[number];
