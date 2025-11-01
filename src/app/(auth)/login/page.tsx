'use client';
import { Button } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  AuthHeader,
  EmailInput,
  PasswordInput,
  GoogleAuthButton,
  AuthLink,
} from '../components';
import { loginSchema, type LoginFormData } from '../schemas/loginSchema';
import Link from 'next/link';

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    reset();
    toast.success('ورود با موفقیت انجام شد');
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8 bg-card rounded-lg shadow-lg border border-border/40">
      <AuthHeader
        title="ورود به سایت"
        description="لطفا برای ورود به سایت اطلاعات خود را وارد کنید"
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
        </div>

        <div className="space-y-3 mt-8">
          <Button type="submit" className="w-full" size="lg">
            ورود
          </Button>
          <AuthLink href="/register" text="حساب کاربری ندارید؟ ثبت نام کنید" />
        </div>
      </form>

      <GoogleAuthButton text="ورود با Google" />
    </div>
  );
}

export default page;
