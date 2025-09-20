import { z } from "zod";

export const otpSchema = z.object({
    otpCode: z
        .array(z.string().min(1, "Each digit is required"))
        .length(6, "Must be 6 digits"),
});

// Since there's no transform, both types are the same
export type OtpFormInputType = z.infer<typeof otpSchema>;
export type OtpSchemaType = z.infer<typeof otpSchema>;