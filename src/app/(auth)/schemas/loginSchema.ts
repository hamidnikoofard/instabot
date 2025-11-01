import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'ایمیل معتبر نیست' }),
  password: z
    .string()
    .min(8, { message: 'رمز عبور باید حداقل 8 کاراکتر باشد' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
