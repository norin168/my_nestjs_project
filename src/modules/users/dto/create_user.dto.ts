import { z } from 'zod';

export const createUserSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
    password: z.string(),
    phone: z.number(),
    email: z.string(),
  })
  .required();

export type CreateUserZodDto = z.infer<typeof createUserSchema>;
