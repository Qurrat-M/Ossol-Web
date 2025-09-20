import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required." })
        .email({ message: "Invalid email address." }),

    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        }),

    confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required." }),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // Path for the error message
});

export type LoginSchemaType = z.infer<typeof loginSchema>;