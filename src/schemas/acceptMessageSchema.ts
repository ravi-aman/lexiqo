import {z} from 'zod';

export const acceptMessageSchema = z.object({
    acceptMessage: z.string().min(1, 'Message is required'),
})