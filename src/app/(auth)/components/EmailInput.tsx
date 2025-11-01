'use client';
import { Input, Label } from '@/components';
import React from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface EmailInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  ariaLabel?: string;
}

export function EmailInput({
  id = 'email',
  label = 'ایمیل',
  placeholder = 'ایمیل',
  register,
  error,
  ariaLabel = 'ایمیل',
}: EmailInputProps) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="block text-sm font-medium text-muted-foreground mb-1"
      >
        {label}
      </Label>
      <Input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full"
        aria-label={ariaLabel}
        {...register}
      />
      {error && (
        <p className="text-sm text-destructive mt-0.5">{error.message}</p>
      )}
    </div>
  );
}
