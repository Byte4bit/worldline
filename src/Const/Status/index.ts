export const StatusConst = [
    "active",
    "canceled",
    "past_due",
    "paused",
    "pending",
] as const;

export const Status = [...StatusConst];

export type StatusType = (typeof StatusConst)[number];
