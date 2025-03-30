import { z } from 'zod';

const passwordSchema = z.string().min(4, { message: 'Минимальная длина пароля 4 символа' });
const updatePasswordSchema = z
  .string()
  .min(4, { message: 'Минимальная длина пароля 4 символа' })
  .optional();

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });
export const formUpdateSchema = z
  .object({
    email: z.string().email({ message: 'Введите корректную почту' }).optional().or(z.literal('')),
    firstName: z
      .string()
      .min(2, { message: 'Минимальная длина имени 2 символа' })
      .optional()
      .or(z.literal('')),
    lastName: z
      .string()
      .min(2, { message: 'Минимальная длина фамилии 2 символа' })
      .optional()
      .or(z.literal('')),
    password: z
      .string()
      .min(4, { message: 'Минимальная длина пароля 4 символа' })
      .optional()
      .or(z.literal('')),
    confirmPassword: z.string().min(4).optional().or(z.literal('')),
  })
  .refine(
    (data) => {
      if (data.password || data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    {
      message: 'Пароли не совпадают',
      path: ['confirmPassword'],
    },
  );

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
export type TFormUpdateValues = z.infer<typeof formUpdateSchema>;
