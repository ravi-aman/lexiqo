import { z } from 'zod';

export const signInSchema = z.object({
    identifier: z
        .string()
        .min(1, "Identifier is required") // Checks that the identifier is not empty
        .refine((value) => {
            // Validate if the identifier is either a valid email or phone number format or just a username
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
            const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 phone number regex
            return emailRegex.test(value) || phoneRegex.test(value) || (value.length >= 3 && value.length <= 30); // Assuming username is between 3 and 30 characters
        }, {
            message: "Identifier must be a valid email, phone number, or username.",
        }),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long") // Minimum length for password
        .min(1, "Password is required"), // Checks that the password is not empty
});
