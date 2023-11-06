export const ChecksConst = [
    "pass",
    "fail",
    "unavailable",
    "unchecked",
] as const;

export const Checks = [...ChecksConst];

export type ChecksType = (typeof ChecksConst)[number];
