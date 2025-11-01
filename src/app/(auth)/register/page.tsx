'use client';
import { Button } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {
  AuthHeader,
  EmailInput,
  PasswordInput,
  GoogleAuthButton,
  AuthLink,
} from '../components';
import {
  registerSchema,
  type RegisterFormData,
} from '../schemas/registerSchema';

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    reset();
    toast.success('ثبت نام با موفقیت انجام شد');
    router.push('/login');
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8 bg-card rounded-lg shadow-lg border border-border/40">
      <AuthHeader
        title="ثبت نام در سایت"
        description="لطفا برای ثبت نام در سایت اطلاعات خود را وارد کنید"
      />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <EmailInput register={register('email')} error={errors.email} />
          <PasswordInput
            id="password"
            label="رمز عبور"
            placeholder="رمز عبور"
            register={register('password')}
            error={errors.password}
          />
          <PasswordInput
            id="confirmPassword"
            label="تایید رمز عبور"
            placeholder="تایید رمز عبور"
            register={register('confirmPassword')}
            error={errors.confirmPassword}
            ariaLabel="تایید رمز عبور"
          />
        </div>

        <div className="space-y-3 mt-8">
          <Button type="submit" className="w-full" size="lg">
            ثبت نام
          </Button>
          <AuthLink
            href="/login"
            text="قبلا ثبت نام کرده‌اید؟ ورود به حساب کاربری"
          />
        </div>
      </form>

      <GoogleAuthButton text="ثبت نام با Google" />
    </div>
  );
}

export default page;
