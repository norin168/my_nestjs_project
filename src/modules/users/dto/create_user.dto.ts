import { z } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string().min(3).max(15),
  lastName: z.string().min(3).max(15),
  username: z.string().min(6).max(15),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(20, { message: 'Password must not exceed 20 characters' })
    .refine((val) => /[a-z]/.test(val), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine((val) => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((val) => /\d/.test(val), {
      message: 'Password must contain at least one number',
    })
    .refine((val) => /[@$!%*?&]/.test(val), {
      message: 'Password must contain at least one special character (@$!%*?&)',
    }),
  phone: z.number(),
  email: z.string().email(),
  role: z.enum(['Admin', 'User']).optional(),
});

export type CreateUserZodDto = z.infer<typeof createUserSchema>;
