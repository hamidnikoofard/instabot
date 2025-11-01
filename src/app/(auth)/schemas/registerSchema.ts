import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.string().email({ message: 'ایمیل معتبر نیست' }),
    password: z
      .string()
      .min(8, { message: 'رمز عبور باید حداقل 8 کاراکتر باشد' })
      .regex(/[A-Z]/, {
        message: 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد',
      })
      .regex(/[a-z]/, {
        message: 'رمز عبور باید حداقل یک حرف کوچک داشته باشد',
      })
      .regex(/[0-9]/, { message: 'رمز عبور باید حداقل یک عدد داشته باشد' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'رمز عبور و تایید رمز عبور مطابقت ندارند',
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
