'use client';
import React from 'react';
import { UserPlus, Instagram, Link2, Bot, LucideIcon } from 'lucide-react';

interface ProgressStep {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  threshold: number;
}

const steps: ProgressStep[] = [
  {
    id: 1,
    icon: UserPlus,
    title: 'ثبت‌نام در لینکزا',
    description:
      'یک حساب کاربری بسازید تا پنل مدیریت دایرکت‌ها و ربات خود را فعال کنید.',
    threshold: 0.1,
  },
  {
    id: 2,
    icon: Instagram,
    title: 'ورود با حساب اینستاگرام',
    description:
      'با حساب اینستاگرام خود وارد شوید تا لینکزا به‌صورت امن به پیج شما متصل شود.',
    threshold: 0.35,
  },
  {
    id: 3,
    icon: Link2,
    title: 'اتصال پیج بیزنسی',
    description:
      'پیج کاری خود را انتخاب و متصل کنید تا ربات لینکزا دایرکت‌ها را مدیریت کند.',
    threshold: 0.65,
  },
  {
    id: 4,
    icon: Bot,
    title: 'فعال‌سازی ربات هوشمند',
    description:
      'ربات پاسخ‌گوی خودکار را فعال کنید تا بدون دردسر، فروش و ارتباطتان رشد کند.',
    threshold: 0.9,
  },
];

const VerticalStep = ({
  step,
  isLast,
}: {
  step: ProgressStep;
  isLast: boolean;
  index: number;
}) => {
  const Icon = step.icon;
  return (
    <div className="flex gap-6">
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center z-10 p-4">
          <Icon className="w-8 h-8" />
        </div>
        {!isLast && <div className="w-0.5 h-full bg-muted mt-2" />}
      </div>
      <div className={`pb-16 ${isLast ? 'pb-0' : ''}`}>
        <span className="text-sm font-semibold text-primary">
          مرحله {step.id}
        </span>
        <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
          {step.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

function MobileHowItWorks() {
  return (
    <div className="py-16 md:hidden ">
      <div className="w-full max-w-md mx-auto py-12 px-4">
        {steps.map((step, index) => (
          <VerticalStep
            key={step.id}
            step={step}
            isLast={index === steps.length - 1}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export { MobileHowItWorks };
