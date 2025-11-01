import React from 'react';

interface HeroDescriptionProps {
  className?: string;
}

export function HeroDescription({ className = '' }: HeroDescriptionProps) {
  return (
    <div
      className={`animate-fade-in-up max-w-3xl ${className}`}
      style={{ animationDelay: '0.6s' }}
    >
      <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed mb-4">
        دایرکت اینستاگرامت رو به یک سیستم فروش منظم و خودکار تبدیل کن.
      </p>
      <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
        ما پاسخ‌گویی، مدیریت سفارش‌ها و ارتباط با مشتری رو هوشمند انجام می‌دیم
        تا فروشت هیچ‌وقت متوقف نشه.
      </p>
    </div>
  );
}
