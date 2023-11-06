export const CaptureMethodConst = ["automatic", "automatic"] as const;

export const CaptureMethod = [...CaptureMethodConst];

export type CaptureMethodType = (typeof CaptureMethodConst)[number];
