export const OccurrenceConst = [
    "consumer_ad_hoc",
    "merchant_ad_hoc",
    "merchant_recurring",
] as const;

export const Occurrence = [...OccurrenceConst];

export type OccurrenceType = (typeof OccurrenceConst)[number];
