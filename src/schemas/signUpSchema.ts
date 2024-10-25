// src/schemas/signUpSchema.ts
import { z } from 'zod';

// Reusable username validation
export const userNameValidation = z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' })
    .max(30, { message: 'Username cannot be more than 30 characters' })
    .regex(
        /^[a-zA-Z0-9_.-]*$/,
        { message: 'Username can only contain letters, numbers, underscores, periods, and dashes' }
    );

// Improved signUp schema
export const signUpSchema = z.object({
    username: userNameValidation,
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' })
        .max(50, { message: 'Name cannot be more than 50 characters' })
        .trim(), // Trim spaces from name
    email: z
        .string()
        .email({ message: 'Invalid email address' })
        .trim()
        .toLowerCase(), // Ensure email is case-insensitive and no extra spaces
    phoneNumber: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please provide a valid phone number in E.164 format' })
        .trim(),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/, {
            message: 'Password must contain at least one letter, one number, and be at least 6 characters long',
        }),
    confirmPassword: z.string(),
    isMessageAccepted: z.boolean().optional().default(false),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'], // Show error at confirmPassword field
    });
