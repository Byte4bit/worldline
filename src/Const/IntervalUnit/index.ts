export const IntervalUnitConst = ["week", "month", "year"] as const;

export const IntervalUnit = [...IntervalUnitConst];

export type IntervalUnitType = (typeof IntervalUnitConst)[number];
